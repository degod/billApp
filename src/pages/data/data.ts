import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';

import { InAppBrowser, InAppBrowserEvent } from '@ionic-native/in-app-browser';
import { WebsiteProvider } from '../../providers/website/website';
import { DatabaseProvider } from '../../providers/database/database';

import { PaymentsuccessfulPage } from '../paymentsuccessful/paymentsuccessful';

@Component({
	selector: 'page-data',
	templateUrl: 'data.html',
})
export class DataPage {
	loading: any;
	networks: any;
	plans: any = '';

	network: any = '';
	plan: any = '';
	email: any = '';
	phone: any = '';
	amount: any = '';

	constructor(public navCtrl: NavController, public web: WebsiteProvider, public db: DatabaseProvider,
				private alertCtrl: AlertController, public loadingCtrl: LoadingController, 
				private iab: InAppBrowser) {
		this.fetchNets();
	}

	fetchNets() {
		this.loading = this.loadingCtrl.create({
			content: 'Fetching Networks...'
		});
		this.loading.present();
		this.web.getData().then(
			(res2: any = {status: null, message: {content: null}}) => {
				let ntes = JSON.parse(res2);
				this.loading.dismissAll();

				if(ntes.status == 'success'){
					this.networks = ntes.message.data.networks;
				}
			}, err => {}
		);
	}

	getPlans() {
		let id = this.network.split('||')[1];
		this.loading = this.loadingCtrl.create({
			content: 'Fetching Plans...'
		});
		this.loading.present();
		this.web.getPlans(id).then(
			(res2: any = {status: null, message: {content: null}}) => {
				this.loading.dismissAll();
				this.plans = [];
				this.amount = [];
				let ntes = res2;

				if(ntes.status == 'ok'){
					this.plans = ntes.data.variations;
				}
			}, err => {}
		);
	}

	setPrice(){
		this.amount = this.plan.split('||')[2];
	}
	
	presentConfirm() {
		var msg = 'Are you sure you want to proceed?';
		let alert = this.alertCtrl.create({
			title: '',
			message: msg,
			buttons: [{
				text: 'No',
				role: 'cancel',
				handler: () => {}
			},{
				text: 'Yes',
				handler: () => {
					this.pay();
				}
			}]
		});
		alert.present();
	}

	pay(){
		let ntwk = this.network.split('||')[1];
		let pln = this.plan.split('||')[1];
		this.loading = this.loadingCtrl.create({
			content: 'Buying Data...'
		});
		this.loading.present();
		let cardTrk = "CRT-"+this.web.rand(100000,999999)+this.web.rand(100000,999999);
		const browser = this.iab.create(this.web.siteaddress2+'process_transaction.php?email='+this.email+'&phone='+this.phone+'&amount='+this.amount+'&billersCode='+this.phone+'&serviceID='+ntwk+'&variation='+pln+'&convenienceFee=0&type=data', '_blank', { hardwareback: 'no', location: 'yes'});
		browser.on("exit").subscribe((res: InAppBrowserEvent) => {
				this.loading.dismissAll();
			}, err => {
				this.loading.dismissAll();
			}
		);
		browser.on("loadstart").subscribe((res: InAppBrowserEvent) => {
				this.loading.dismissAll();
				if(res.url.startsWith("https://forthesharp.com/naira.com/") || res.url.startsWith("https://api.ravepay.co/flwv3-pug/getpaidx/api/complete")){
					browser.close();

					let resp = null;
					resp = decodeURIComponent(res.url.split("resp=")[1]);
					resp = JSON.parse(resp);

					if(resp.status=="delivered" || resp.status=="ok"){
						this.loading.dismissAll();
						this.navCtrl.push(PaymentsuccessfulPage);
					}else {
						this.loading = this.loadingCtrl.create({
							content: 'Delivering Service...'
						});
						this.loading.present();
						this.web.finalizeTranx(cardTrk).then(
							(res2: any = {status: null, message: {content: null}}) => {
								let ntes = JSON.parse(res2);
								this.loading.dismissAll();

								if(ntes.status=="delivered" || ntes.status=="ok"){
									this.navCtrl.push(PaymentsuccessfulPage);
								}else{
									this.presentAlert("Payment Unsuccessful");
								}
							}, err => {
								this.presentAlert("Payment Unsuccessful");
							}
						);
					}
				}else{
					this.loading.dismissAll();
				}
			}, err => {
				this.loading.dismissAll();
			}
		);
	}
	
	presentAlert(Message) {
        let alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: Message,
            buttons: ['Okay']
        });
        alert.present();
    }
}
