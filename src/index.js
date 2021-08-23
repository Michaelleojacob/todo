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
			this.testing();
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
		testing() {
			// Select the node that will be observed for mutations
			const targetNode = document.getElementById('myContentWrapper');

			// Options for the observer (which mutations to observe)
			const config = { attributes: true, childList: true, subtree: true };

			// Callback function to execute when mutations are observed
			const callback = function (mutationsList, observer) {
				// Use traditional 'for loops' for IE 11
				for (const mutation of mutationsList) {
					if (mutation.type === 'attributes') {
						console.log(
							'The ' + mutation.attributeName + ' attribute was modified.'
						);
					}
				}
			};

			// Create an observer instance linked to the callback function
			const observer = new MutationObserver(callback);

			// Start observing the target node for configured mutations
			observer.observe(targetNode, config);

			// // Later, you can stop observing
			// observer.disconnect();
		},
	};
	app.init();
})();
