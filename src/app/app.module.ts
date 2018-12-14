import { NgModule, ErrorHandler } from '@angular/core';
// 引入http模块
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MessagePage } from '../pages/message/message';
import { ContactPage } from '../pages/contact/contact';
import { SpacePage } from '../pages/space/space';
import { LoginPage } from '../pages/login/login';
import { TalkPage } from '../pages/talk/talk';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// 引入自定义组件模块
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    MyApp,
    MessagePage,
    ContactPage,
    SpacePage,
    LoginPage,
    TalkPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    // 注入http模块
    HttpModule,
    // 引入组件模块
    ComponentsModule,
    IonicModule.forRoot(MyApp, {
        tabsHideOnSubPages: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MessagePage,
    ContactPage,
    SpacePage,
    LoginPage,
    TalkPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
