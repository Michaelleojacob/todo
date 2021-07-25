import './ui.css';
import header from './header/header';
import sidebar from './sidebar/sidebar';
import flair from './../flair/flair';

export default function ui() {
	const ui = {
		init: function () {
			this.cacheDom();
			this.runUiElements();
		},
		cacheDom: function () {
			this.container = document.querySelector('#container');
		},
		runUiElements: function () {
			header(this.container);
			sidebar(this.container);
			flair();
		},
	};
	ui.init();
}
