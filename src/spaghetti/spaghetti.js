export default function myNewTaskClick() {
	const newTaskClick = {
		init() {
			// this.cacheDom();
			// this.listenForNewTask();
		},
		cacheDom() {
			this.parent = document.querySelector('.newBtnWrap');
			return this.parent;
		},
		listenForNewTask() {
			console.log(this.parent);
		},
	};
	document.addEventListener('DOMContentLoaded', () => {
		newTaskClick.init();
	});
}
