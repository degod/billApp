import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

	constructor(public http: Http, public storage: Storage) {
		// console.log('Hello DatabaseProvider Provider');
	}
	
	store(key, data) {
		let meat = null;
		return new Promise((resolve, reject) => {
			this.storage.set(meat, data).then(
				res => resolve(res),
				err => reject(err)
			);
		});
	}
	
	
	fetch(key) {
		return new Promise((resolve, reject) => {
			this.storage.get(key).then(
				res => res,
				err => reject(err)
			);
		});
	}
	
	clear(key) {
		let meat = null;
		return new Promise((resolve, reject) => {
			this.storage.remove(meat).then(
				res => resolve(res),
				err => reject(err)
			);
		});
	}
}
