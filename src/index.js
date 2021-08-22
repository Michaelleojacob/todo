import './index.css';
import myNavEvent from './navEvent/navEvent';
import myheader from './header/header';
import MyNavMenuDisplay from './navMenuDisplay/navMenu';
import myuichanges from './handleuichanges/uichanges';
import ProjectTodos from './projectTodos/projectTodos';
import myNewTaskClick from './spaghetti/spaghetti';

(function () {
	const app = {
		init: function () {
			this.cacheDom();
			this.navEventListener();
			this.renderHeader();
			this.renderNavArea();
			this.renderuichanges();
			this.renderProjectTodos();
			this.listenForMyNewTaskClick();
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
		renderProjectTodos() {
			ProjectTodos.init();
		},
		listenForMyNewTaskClick() {
			myNewTaskClick();
		},
	};
	app.init();
})();
