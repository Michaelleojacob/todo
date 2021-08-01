import './ui.css';
import header from './header/header';
import mydropdown from '../dropdownmenuarea/dropdown';
import content from './../content/content';
import myfooter from './../flair/flair';

export default function myui() {
	const ui = {
		init: function () {
			this.cacheDom();
			this.runUiElements();
		},
		cacheDom: function () {
			this.container = document.querySelector('#container');
		},
		runUiElements: function () {
			header(ui.container);
			mydropdown(ui.container);
			content(ui.container);
			myfooter(ui.container);
		},
	};
	ui.init();
}
