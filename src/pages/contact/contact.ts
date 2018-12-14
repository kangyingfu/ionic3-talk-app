import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// 引入http服务
import { Http } from '@angular/http';
// 引入talk页面
import { TalkPage } from '../talk/talk';

@Component({
	selector: 'page-contact',
	templateUrl: 'contact.html'
})
export class ContactPage {
	userImage = '10.jpeg';
	// 默认选中好友
	page = 'friend';
	// 定义数据
	data = [];
	constructor(public navCtrl: NavController, public http: Http) {
		// 请求数据
		http.get('data/contact.json')
			// 存储数据
			.subscribe(res => this.data = res.json());
	}
	// 点击列表成员，切换子列表显隐
	toggleChildList(item) {
		// 切换open属性
		item.open = !item.open;
	}
	// 进入聊天页面
	showTalkPage(id) {
		// 切换页面
		this.navCtrl.push(TalkPage, { id })
	}
}
