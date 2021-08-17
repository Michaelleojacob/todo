import './index.css';
import myNavEvent from './navEvent/navEvent';
import myheader from './header/header';
import MyNavMenuDisplay from './navMenuDisplay/navMenu';
import myuichanges from './handleuichanges/uichanges';
import Spaghetti from './spaghetti/spaghetti';

(function () {
	const app = {
		init: function () {
			this.cacheDom();
			this.navEventListener();
			this.renderHeader();
			this.renderNavArea();
			this.renderuichanges();
			this.renderSpaghetti();
		},
		cacheDom: function () {
			this.parent = document.querySelector('#container');
		},
		navEventListener: function () {
			document.addEventListener('DOMContentLoaded', () => {
				myNavEvent();
			});
		},
		renderHeader: function () {
			myheader(app.parent);
		},
		renderNavArea: function () {
			MyNavMenuDisplay(app.parent);
		},
		renderuichanges: function () {
			myuichanges(app.parent);
		},
		renderSpaghetti() {
			Spaghetti.init();
		},
	};
	app.init();
})();
