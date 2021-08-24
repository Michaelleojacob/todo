import './spaghetti.css';

export default function myListenForNewBtnClick() {
	const newBtnClick = {
		init() {
			this.listenForEvent();
		},
		cacheDom() {
			this.newTask = document.querySelector('#newTask');
			this.newProjTask = document.querySelector('#newProjTask');
			this.newProject = document.querySelector('#newProject');
		},
		listenForEvent() {
			document.addEventListener('click', this.handleEventDeligation);
		},
		handleEventDeligation(event) {
			if (event.target === document.querySelector('#newTask')) {
				console.log('hi');
			}
			if (event.target === document.querySelector('#newProjTask')) {
				console.log('hey');
			}
			if (event.target === document.querySelector('#newProject')) {
				console.log('hello there');
			}
		},
	};
	newBtnClick.init();
}
