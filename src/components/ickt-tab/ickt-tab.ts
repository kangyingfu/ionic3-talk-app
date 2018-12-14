import { Component } from '@angular/core';

/**
 * Generated class for the IcktTabComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
	// 自定义元素名称选择器
	selector: 'ickt-tab',
	templateUrl: 'ickt-tab.html',
	// 接收属性数据
	inputs: ['src', 'title', 'text']
})
export class IcktTabComponent {
	// 声明属性类型
	text: string;
	title: string;
	src: string;

	constructor() {
		// console.log('Hello IcktTabComponent Component');
		// this.text = 'Hello World';
	}

}
