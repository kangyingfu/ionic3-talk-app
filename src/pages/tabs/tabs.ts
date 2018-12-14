import { Component } from '@angular/core';

import { MessagePage } from '../message/message';
import { ContactPage } from '../contact/contact';
import { SpacePage } from '../space/space';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

	// tab1Root = HomePage;
	// tab2Root = AboutPage;
	// tab3Root = ContactPage;

	tabs = [
		{
			root: MessagePage,
			title: '消息',
			icon: 'chatbubbles'
		},
		{
			root: ContactPage,
			title: '联系人',
			icon: 'people'
		},
		{
			root: SpacePage,
			title: '动态',
			icon: 'star'
		}
	]

	constructor() {

	}
}
