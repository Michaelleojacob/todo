import './ui.css';
import header from './header/header';
import content from './../content/content';
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
			content(this.container);
			flair();
		},
	};
	ui.init();
}
