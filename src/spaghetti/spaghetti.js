import Todo from '../newTodo/todo';
import Projects from '../projectClass/projectClass';
import Storage from '../storage/storage';

export default function myListenForSubmit() {
	const listenForSubmit = {
		init() {
			document.addEventListener('submit', e => {
				e.preventDefault();
				console.log(e);
				// console.log(e.target);
				const value = e.target[0].value;
				// console.log(e.target.id);
				if (e.target.id === 'newTaskForm') {
					const task = new Todo(value, null, 'all');
					console.log(task);
				}
				if (e.target.id === 'newProjectForm') {
					console.log(`project ${value}`);
					const newProject = new Projects(value);
					console.log(newProject);
				}
				if (e.target.id === 'newProjTaskForm') {
					console.log(`projTask ${value}`);
				}
			});
		},
	};
	listenForSubmit.init();
}
