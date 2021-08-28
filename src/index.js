import './index.css';
import myNavEvent from './navEvent/navEvent';
import myheader from './header/header';
import MyNavMenuDisplay from './navMenuDisplay/navMenu';
import myuichanges from './handleuichanges/uichanges';
import ProjectTodos from './projectTodos/projectTodos';
import myListenForNewBtnClick from './addNewItemDisplay/addNewItemDisplay';
import myListenForSubmit from './spaghetti/spaghetti';

(function () {
	const app = {
		init: function () {
			this.cacheDom();
			this.navEventListener();
			this.renderHeader();
			this.renderNavArea();
			this.renderuichanges();
			this.renderProjectTodos();
			this.newItemEvent();
			this.submitNewItemEvent();
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
			myuichanges.init(app.parent);
		},
		renderProjectTodos() {
			ProjectTodos.init();
		},
		newItemEvent() {
			myListenForNewBtnClick();
		},
		submitNewItemEvent() {
			myListenForSubmit();
		},
	};
	app.init();
})();
