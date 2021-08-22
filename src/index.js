import './index.css';
import myNavEvent from './navEvent/navEvent';
import myheader from './header/header';
import MyNavMenuDisplay from './navMenuDisplay/navMenu';
import myuichanges from './handleuichanges/uichanges';
import ProjectTodos from './projectTodos/projectTodos';
import myNewTaskClick from './spaghetti/spaghetti';
import ListenForNewBtnClick from './spaghetti/spaghetti';

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
		listenForCreateNewItemClick() {
			const elementToObserve = document.querySelector('.contentWrapper');
			// create a new instance of `MutationObserver` named `observer`,
			// passing it a callback function
			const observer = new MutationObserver(function () {
				console.log('callback that runs when observer is triggered');
			});

			// call `observe()` on that MutationObserver instance,
			// passing it the element to observe, and the options object
			observer.observe(elementToObserve, { subtree: true, childList: true });
		},
	};
	app.init();
})();
