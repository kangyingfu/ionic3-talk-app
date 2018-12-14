import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, MenuController } from 'ionic-angular';
// 引入http模块
import { Http } from '@angular/http';
// 引入message
// import { MessagePage } from '../message/message';
// 引入tabs页面
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage {

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		public alert: AlertController,
		public http: Http,
		// 注册菜单模块
		public menu: MenuController
	) {
	}
	// 页面视图加载完成时候执行的方法
	ionViewDidLoad() {
		// 阻止滑动显示菜单栏
		this.menu.swipeEnable(false);
		// console.log('ionViewDidLoad LoginPage');
	}
	// 登录
	showHomePage(username, password) {
		// 校验用户名，密码，不合法要提示
		if (username === '' || password === '') {
			// 提示用户输入内容
			let al = this.alert.create({
				title: '请输入完整的用户名和密码',
				buttons: ['确定']
			})
			// 显示
			// 阻止后面程序执行
			return al.present();
		}
		// 发送请求
		this.http.post('assets/login.json', {
			username,
			password
		})
		// webpack内置的服务器，不能发送post请求，只能发送get请求
		this.http.get('data/login.json', {
			// 传递query参数
			params: { username, password }
		})
		// rxjs规范中，通过subscribe监听返回
		.subscribe(res => {
			// 转换json数据
			let data = res.json();
			// console.log(data)
			// 登录成功，进入消息页面
			if (data.errno === 0) {
				// 进入消息页面
				// this.navCtrl.push(MessagePage);
				// 进入tabs页面
				this.navCtrl.push(TabsPage)
			}
		})
		// console.log(username, password)
	}
}
