export default function ListenForNewBtnClick() {
	const newBtnClick = {
		init() {
			console.log('hello');
			this.cacheDom();
			// this.listenForNewTask();
		},
		cacheDom() {
			this.newTask = document.querySelector('#newTask');
			this.newProjTask = document.querySelector('#newProjTask');
			this.newProject = document.querySelector('#newProject');
			console.log(this.newTask, this.newProjTask, this.newProject);
			// return this.parent;
		},
		listenForNewTask() {
			console.log(this.parent);
		},
	};
	document.addEventListener('DOMContentLoaded', () => {
		newBtnClick.init();
	});
}
