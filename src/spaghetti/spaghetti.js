import Todo from '../newTodo/todo';
import Projects from '../projectClass/projectClass';
import Storage from '../storage/storage';

export default function myListenForSubmit() {
	const listenForSubmit = {
		init() {
			document.addEventListener('submit', e => {
				e.preventDefault();

				//? for testing ?\\
				console.log(e);
				// console.log(e.target);
				const value = e.target[0].value;
				// console.log(e.target.id);

				//? new task ?\\
				if (e.target.id === 'newTaskForm') {
					if (value.length === 0) return;
					const task = new Todo(value, null, 'all');
					console.log(e.target.parentNode);

					console.log(e.target[0]);
					e.target[0].value = '';
					e.target.parentNode.classList.toggle('formInactive');

					console.log(task);
				}

				//? new project?\\
				if (e.target.id === 'newProjectForm') {
					console.log(`project ${value}`);
					const newProject = new Projects(value);
					console.log(newProject);
				}

				//? new proj task ?\\
				if (e.target.id === 'newProjTaskForm') {
					let lolmyThing =
						e.target.parentNode.parentNode.parentNode.childNodes[0]
							.classList[0];
					const newProjTask = new Todo(value, null, lolmyThing);
					console.log(newProjTask);
				}
			});
		},
	};
	listenForSubmit.init();
}
