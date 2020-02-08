import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SearchPage } from '../search/search';
import { AddmoneyPage } from '../addmoney/addmoney';
import { GetpaymentPage } from '../getpayment/getpayment';
import { TransactionPage } from '../transaction/transaction';
import { Book_ticketPage } from '../book_ticket/book_ticket';

import { PhonerechargePage } from '../phonerecharge/phonerecharge';
import { DataPage } from '../data/data';
import { TvPage } from '../tv/tv';
import { ElectricPage } from '../electric/electric';
import { EducationPage } from '../education/education';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  constructor(public navCtrl: NavController) {

  }
  phonerecharge(){
      this.navCtrl.push(PhonerechargePage)
  }
  data(){
      this.navCtrl.push(DataPage)
  }  
  tv(){
      this.navCtrl.push(TvPage)
  }  
  electric(){
      this.navCtrl.push(ElectricPage)
  }  
  flight(){
      window.open('https://www.travelstart.com.ng/?afflid=196582');
  } 
  education(){
      this.navCtrl.push(EducationPage)
  }
   
  search(){
      this.navCtrl.push(SearchPage)
  } 
  addmoney(){
      this.navCtrl.push(AddmoneyPage)
  } 
  getpayment(){
      this.navCtrl.push(GetpaymentPage)
  } 
  transaction(){
      this.navCtrl.push(TransactionPage)
  } 

}
