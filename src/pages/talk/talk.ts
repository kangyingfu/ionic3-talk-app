import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// 引入http模块
import { Http } from '@angular/http';

/**
 * Generated class for the TalkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-talk',
	templateUrl: 'talk.html',
})
export class TalkPage {
	// 定义数据
	data = {};
	constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
		// console.log(navParams)
		// 发送请求
		this.http.get(`data/talk.json?id=${navParams.data.id}`)
			// 存储数据
			.subscribe(res => { this.data = res.json() })
	}

	ionViewDidLoad() {
	// console.log('ionViewDidLoad TalkPage');
	}

}
