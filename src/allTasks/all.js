import './all.css';
export default class AllTasks {
	static init(parent) {
		this.parent = parent;
		this.allTasksWrapper();
		this.makeAllTasksheader();
	}
	static allTasksWrapper() {
		this.alltaskswrap = document.createElement('div');
		this.alltaskswrap.classList.add('alltaskwrap');
		this.parent.appendChild(this.alltaskswrap);
	}
	static makeAllTasksheader() {
		this.alltasksHeader = document.createElement('div');
		this.alltasksHeader.classList.add('alltasksheader');
		this.alltasksHeader.textContent = 'All Tasks';
		this.alltaskswrap.appendChild(this.alltasksHeader);
	}
	//! add class to handle making new todo !\\
}
