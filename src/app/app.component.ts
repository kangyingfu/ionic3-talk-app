import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
// import { LoginPage } from '../pages/login/login';
// import { TalkPage } from '../pages/talk/talk';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    // 默认启动登录页面
    // rootPage:any = LoginPage;
    rootPage:any = TabsPage;
    // rootPage:any = TalkPage;
    // 定义菜单栏中的数据
    userInfo = {
        icon: '10.jpeg',
        name: '雨夜清荷',
        info: '编辑个性名片'
    }
    list = [
        { icon: 'ribbon', title: '了解会员特权' },
        { icon: 'browsers', title: 'QQ钱包' },
        { icon: 'shirt', title: '个性装扮' },
        { icon: 'pricetag', title: '我的收藏' },
        { icon: 'images', title: '我的相册' },
        { icon: 'folder', title: '我的文件' },
        { icon: 'logo-yahoo', title: '免费特权' }
    ]
    tabs = [
        { icon: 'settings', title: '设置' },
        { icon: 'moon', title: '夜间' },
        { icon: 'person', title: '北京' }
    ]

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
        platform.ready().then(() => {
          // Okay, so the platform is ready and our plugins are available.
          // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
}
