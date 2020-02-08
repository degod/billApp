import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AccountPage } from '../pages/account/account';
import { AddmoneyPage } from '../pages/addmoney/addmoney';
import { Book_ticketPage } from '../pages/book_ticket/book_ticket';
import { CategoriesPage } from '../pages/categories/categories';
import { ConditionPage } from '../pages/condition/condition';
import { FavoritedPage } from '../pages/favorited/favorited';
import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
import { GetpaymentPage } from '../pages/getpayment/getpayment';
import { HelpPage } from '../pages/help/help';
import { Item_infoPage } from '../pages/item_info/item_info';
import { Item_listsPage } from '../pages/item_lists/item_lists';
import { MallPage } from '../pages/mall/mall';
import { My_ordersPage } from '../pages/my_orders/my_orders';
import { MyprofilePage } from '../pages/myprofile/myprofile';
import { NotificationPage } from '../pages/notification/notification';
import { Pay_or_sendPage } from '../pages/pay_or_send/pay_or_send';
import { PaymentsuccessfulPage } from '../pages/paymentsuccessful/paymentsuccessful';
import { PromocodePage } from '../pages/promocode/promocode';
import { SearchPage } from '../pages/search/search';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { TransactionPage } from '../pages/transaction/transaction';
import { VerificationPage } from '../pages/verification/verification';

import { HomePage } from '../pages/home/home';
import { PhonerechargePage } from '../pages/phonerecharge/phonerecharge';
import { DataPage } from '../pages/data/data';
import { TvPage } from '../pages/tv/tv';
import { ElectricPage } from '../pages/electric/electric';
import { EducationPage } from '../pages/education/education';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WebsiteProvider } from '../providers/website/website';
import { DatabaseProvider } from '../providers/database/database';
import { InAppBrowser } from '@ionic-native/in-app-browser';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PhonerechargePage,
    DataPage,
    TvPage,
    ElectricPage,
    EducationPage,

    AccountPage,
    AddmoneyPage,
    Book_ticketPage,
    CategoriesPage,
    ConditionPage,
    FavoritedPage,
    ForgotpasswordPage,
    GetpaymentPage,
    HelpPage,
    Item_infoPage,
    Item_listsPage,
    MallPage,
    My_ordersPage,
    MyprofilePage,
    NotificationPage,
    Pay_or_sendPage,
    PaymentsuccessfulPage,
    PromocodePage,
    SearchPage,
    SigninPage,
    SignupPage,
    TabsPage,
    TransactionPage,
    VerificationPage
  ],
   imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PhonerechargePage,
    DataPage,
    TvPage,
    ElectricPage,
    EducationPage,

    AccountPage,
    AddmoneyPage,
    Book_ticketPage,
    CategoriesPage,
    ConditionPage,
    FavoritedPage,
    ForgotpasswordPage,
    GetpaymentPage,
    HelpPage,
    Item_infoPage,
    Item_listsPage,
    MallPage,
    My_ordersPage,
    MyprofilePage,
    NotificationPage,
    Pay_or_sendPage,
    PaymentsuccessfulPage,
    PromocodePage,
    SearchPage,
    SigninPage,
    SignupPage,
    TabsPage,
    TransactionPage,
    VerificationPage
  ],
  providers: [
    InAppBrowser,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WebsiteProvider,
    DatabaseProvider
  ]
})
export class AppModule {}
