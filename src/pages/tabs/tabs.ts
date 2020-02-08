import { Component } from '@angular/core';

import { HomePage } from '../home/home';
// import { MallPage } from '../mall/mall';
import { My_ordersPage } from '../my_orders/my_orders';
import { SigninPage } from '../signin/signin';
import { AccountPage } from '../account/account';

@Component({
	templateUrl: 'tabs.html'
})
export class TabsPage {
	user: any;

	tab1Root = HomePage;
	tab2Root = My_ordersPage;
	tab3Root = AccountPage;
	tab4Root = HomePage;
	tab5Root = SigninPage;

	constructor() {
	}
}
