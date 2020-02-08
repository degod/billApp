import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';

import { InAppBrowser, InAppBrowserEvent } from '@ionic-native/in-app-browser';
import { WebsiteProvider } from '../../providers/website/website';
import { DatabaseProvider } from '../../providers/database/database';

import { PaymentsuccessfulPage } from '../paymentsuccessful/paymentsuccessful';

@Component({
	selector: 'page-phonerecharge',
	templateUrl: 'phonerecharge.html'
})
export class PhonerechargePage {
	loading: any;
	networks: any;

	network: any = '';
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
		this.web.getAirtime().then(
			(res2: any = {status: null, message: {content: null}}) => {
				let ntes = JSON.parse(res2);
				this.loading.dismissAll();

				if(ntes.status == 'success'){
					this.networks = ntes.message.content;
				}
			}, err => {}
		);
	}
	
	presentConfirm() {
		var msg = 'Are you sure you want to proceed?';
		let alert = this.alertCtrl.create({
			title: '',
			message: msg,
			buttons: [{
				text: 'No',
				role: 'cancel',
				handler: () => {
				}
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
		this.loading = this.loadingCtrl.create({
			content: 'Buying Airtime...'
		});
		this.loading.present();
		let cardTrk = "CRT-"+this.web.rand(100000,999999)+this.web.rand(100000,999999);
		const browser = this.iab.create(this.web.siteaddress2+'process_transaction.php?email='+this.email+'&phone='+this.phone+'&amount='+this.amount+'&billersCode='+this.phone+'&serviceID='+ntwk+'&convenienceFee=0&type=airtime&cardTrack='+cardTrk, '_blank', { hardwareback: 'no', location: 'yes'});
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
