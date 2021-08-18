import Todo from '../newTodo/todo';
import Projects from '../projectClass/projectClass';

export default class Storage {
	static getTodos() {
		let todos;
		if (localStorage.getItem('todos') === null) {
			todos = [];
		} else {
			todos = JSON.parse(localStorage.getItem('todos'));
		}
		return todos;
	}
	static addTodo(todo) {
		const todos = Storage.getTodos();
		todos.push(todo);
		localStorage.setItem('todos', JSON.stringify(todos));
	}
	static removeTodo(id) {
		const todos = Storage.getTodos();
		todos.forEach((todo, index) => {
			if (todo.id === id) {
				todos.splice(index, 1);
			}
		});
		localStorage.setItem('todos', JSON.stringify(todos));
	}
	static getProjects() {
		let projects;
		if (localStorage.getItem('projects') === null) {
			projects = [];
		} else {
			projects = JSON.parse(localStorage.getItem('projects'));
		}
		return projects;
	}
	static addProject(project) {
		const projects = Storage.getProjects();
		projects.push(project);
		localStorage.setItem('projects', JSON.stringify(projects));
	}
}

function dummytodos() {
	const todo1 = new Todo('todo1', '1/1/2021', 'all');
	const todo2 = new Todo('todo2', '2/2/2021', 'all');
	const todo3 = new Todo('todo3', '3/3/2021', 'project1');
	const todo4 = new Todo('todo4', '4/4/2021', 'project2');
	const todo5 = new Todo('todo5', '5/5/2021', 'all');
	const todo6 = new Todo('todo6', '5/5/2021', 'all');
	const todo7 = new Todo('todo7', '5/5/2021', 'all');
	const todo8 = new Todo('todo8', '5/5/2021', 'project three');

	Storage.addTodo(todo1);
	Storage.addTodo(todo2);
	Storage.addTodo(todo3);
	Storage.addTodo(todo4);
	Storage.addTodo(todo5);
	Storage.addTodo(todo6);
	Storage.addTodo(todo7);
	Storage.addTodo(todo8);
}
function dummyProjects() {
	const proj1 = new Projects('runescape');
	const proj2 = new Projects('escape from tarkov');
	const proj3 = new Projects('project three');
	Storage.addProject(proj1);
	Storage.addProject(proj2);
	Storage.addProject(proj3);
}

if (localStorage.getItem('todos') === null) {
	dummytodos();
}
if (localStorage.getItem('projects') === null) {
	dummyProjects();
}
