import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/timeout';
import { DatabaseProvider } from '../database/database';

@Injectable()
export class WebsiteProvider {
	// siteaddress2 = 'http://localhost:8888/billsPaymentBK/apis/';
	siteaddress2 = 'https://paydab.com/apis/';

	constructor(public http: Http, public db: DatabaseProvider) {}
	
	getAirtime(){
		let url = this.siteaddress2 + "?option=getAirtime";
		let data = JSON.stringify({
			"channel": "getAirtime"
		});
		let headers = new Headers({
			'Content-Type': 'application/json',
			'Header-Key': 'OfoCron'
		});
		let options = new RequestOptions({ headers: headers });
		
		let next = null;
		return new Promise((resolve, reject) => {
			this.http.post(url, next, options).timeout(30000).toPromise()
			.then(response => {
				if(response[0] != ''){
					resolve(response.json());
				}else{
					resolve(response);
				}
			}, error => {
				reject(error);
			});
		});
	}
	
	getData(){
		let url = this.siteaddress2 + "?option=getData";
		let data = JSON.stringify({
			"channel": "getData"
		});
		let meat = null;
		let headers = new Headers({
			'Content-Type': 'application/json',
			'Header-Key': 'OfoCron'
		});
		let options = new RequestOptions({ headers: headers });
		
		return new Promise((resolve, reject) => {
			this.http.post(url, meat, options).timeout(30000).toPromise()
			.then(response => {
				if(response[0] != ''){
					resolve(response.json());
				}else{
					resolve(response);
				}
			}, error => {
				reject(error);
			});
		});
	}
	
	getPlans(id){
		let url = "https://aimtoget.com/api/v1/data/variations/"+id;
		
		let next = null;
		return new Promise((resolve, reject) => {
			this.http.get(next).timeout(30000).toPromise()
			.then(response => {
				if(response[0] != ''){
					resolve(response.json());
				}else{
					resolve(response);
				}
			}, error => {
				reject(error);
			});
		});
	}
	
	getTv(){
		let url = this.siteaddress2 + "?option=getTv";
		let data = JSON.stringify({
			"channel": "getTv"
		});
		let headers = new Headers({
			'Content-Type': 'application/json',
			'Header-Key': 'OfoCron'
		});
		let options = new RequestOptions({ headers: headers });
		
		let next = null;
		return new Promise((resolve, reject) => {
			this.http.post(url, next, options).timeout(30000).toPromise()
			.then(response => {
				if(response[0] != ''){
					resolve(response.json());
				}else{
					resolve(response);
				}
			}, error => {
				reject(error);
			});
		});
	}
	
	getBouquets(id){
		let url = "https://vtpass.com/api/service-variations?serviceID="+id;
		
		let next = null;
		return new Promise((resolve, reject) => {
			this.http.get(next).timeout(30000).toPromise()
			.then(response => {
				if(response[0] != ''){
					resolve(response.json());
				}else{
					resolve(response);
				}
			}, error => {
				reject(error);
			});
		});
	}
	
	getElectric(){
		let url = this.siteaddress2 + "?option=getElectric";
		let data = JSON.stringify({
			"channel": "getElectric"
		});
		let headers = new Headers({
			'Content-Type': 'application/json',
			'Header-Key': 'OfoCron'
		});
		let options = new RequestOptions({ headers: headers });
		
		let next = null;
		return new Promise((resolve, reject) => {
			this.http.post(url, next, options).timeout(30000).toPromise()
			.then(response => {
				if(response[0] != ''){
					resolve(response.json());
				}else{
					resolve(response);
				}
			}, error => {
				reject(error);
			});
		});
	}
	
	getEducation(){
		let url = this.siteaddress2 + "?option=getEducation";
		let data = JSON.stringify({
			"channel": "getEducation"
		});
		let headers = new Headers({
			'Content-Type': 'application/json',
			'Header-Key': 'OfoCron'
		});
		let options = new RequestOptions({ headers: headers });
		
		let next = null;
		return new Promise((resolve, reject) => {
			this.http.post(url, next, options).timeout(30000).toPromise()
			.then(response => {
				if(response[0] != ''){
					resolve(response.json());
				}else{
					resolve(response);
				}
			}, error => {
				reject(error);
			});
		});
	}
	
	verifyBiller(id, plan, code){
		let url = this.siteaddress2 + "?option=verifyBiller";
		let data = JSON.stringify({
			"channel": "verifyBiller",
			"serviceID": id,
			"variation": plan,
			"billersCode": code
		});
		let headers = new Headers({
			'Content-Type': 'application/json',
			'Header-Key': 'OfoCron'
		});
		let options = new RequestOptions({ headers: headers });
		
		let next = null;
		return new Promise((resolve, reject) => {
			this.http.post(url, next, options).timeout(30000).toPromise()
			.then(response => {
				if(response[0] != ''){
					resolve(response.json());
				}else{
					resolve(response);
				}
			}, error => {
				reject(error);
			});
		});
	}
	
	finalizeTranx(cardTrack){
		let url = this.siteaddress2 + "?option=finalizeTranx";
		let data = JSON.stringify({
			"channel": "finalizeTranx",
			"cardTrack": cardTrack
		});
		let headers = new Headers({
			'Content-Type': 'application/json',
			'Header-Key': 'OfoCron'
		});
		let options = new RequestOptions({ headers: headers });
		
		let next = null;
		return new Promise((resolve, reject) => {
			this.http.post(url, next, options).timeout(30000).toPromise()
			.then(response => {
				if(response[0] != ''){
					resolve(response.json());
				}else{
					resolve(response);
				}
			}, error => {
				reject(error);
			});
		});
	}

    rand(min, max){
	    return Math.floor(Math.random()*(max-min+1)+min);
	}
}
