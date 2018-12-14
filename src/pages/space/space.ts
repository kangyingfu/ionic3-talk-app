import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SpacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-space',
	templateUrl: 'space.html',
})
export class SpacePage {
	userImage = '10.jpeg';
	// 定义列表数据
	list = [
		{ icon: 'logo-playstation', text: '游戏' },
		{ icon: 'logo-playstation', text: '日迹' },
		{ icon: 'logo-playstation', text: '看点' },
		{ icon: 'logo-playstation', text: '京东购物' },
		{ icon: 'logo-playstation', text: '企鹅电竞' },
		{ icon: 'logo-playstation', text: '鹅漫U品' },
		{ icon: 'logo-playstation', text: '动漫' },
		{ icon: 'logo-playstation', text: '阅读' },
		{ icon: 'logo-playstation', text: '音乐' },
		{ icon: 'logo-playstation', text: 'now直播' },
		{ icon: 'logo-playstation', text: '热门运动' },
		null,
		{ icon: 'logo-playstation', text: '运动' },
		{ icon: 'logo-playstation', text: '吃喝玩乐' },
		{ icon: 'logo-playstation', text: '同城服务' }
	];
	// tabs数据
	tabs = [
		{ src: 'message.png', title: '好友动态' },
		{ src: 'pin.jpg', title: '附近' },
		{ src: 'intrest.jpg', title: '兴趣部落' }
	]
	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
	console.log('ionViewDidLoad SpacePage');
	}

}
