import { Component } from '@angular/core';
// 引入http服务
import { Http } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// 引入talk页面组件
import { TalkPage } from '../talk/talk';

/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {
	// 用户头像图片
	userImage = '10.jpeg';
	// 声明列表数据
	list = [];
	constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
		// 请求数据
		this.http.get('data/message.json')
			// 存储数据
			// 只有一句话，省略函数体
			.subscribe(res => this.list = res.json())
			// .subscribe(res => {
			// 	// 转换成js对象
			// 	this.list = res.json();
			// 	console.log(data)
			// })
	}
	ionViewDidLoad() {
	// console.log('ionViewDidLoad MessagePage');
	}
	// 点击好友，进入聊天页面
	showTalkPage(id) {
		// 进入聊天页面
		this.navCtrl.push(TalkPage, {id})
	}

}
