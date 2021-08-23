export default function ListenForNewBtnClick() {
	const newBtnClick = {
		init() {
			this.cacheDom();
			// this.listenForNewTask();
		},
		cacheDom() {
			this.newTask = document.querySelector('#newTask');
			this.newProjTask = document.querySelector('#newProjTask');
			this.newProject = document.querySelector('#newProject');
			// console.log(this.newTask, this.newProjTask, this.newProject);
			// return this.parent;
		},
		listenForNewTask() {},
	};
	document.addEventListener('DOMContentLoaded', () => {
		newBtnClick.init();
	});
}
