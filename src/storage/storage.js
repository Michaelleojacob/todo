import Todo from '../newTodo/todo';

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
}

// const todo1 = new Todo('todo1', '1/1/2021', 'all');
// const todo2 = new Todo('todo2', '2/2/2021', 'all');
// const todo3 = new Todo('todo3', '3/3/2021', 'project1');
// const todo4 = new Todo('todo4', '4/4/2021', 'project2');
// const todo5 = new Todo('todo5', '5/5/2021', 'all');
// const todo6 = new Todo('todo6', '5/5/2021', 'all');
// const todo7 = new Todo('todo7', '5/5/2021', 'all');

// Storage.addTodo(todo1);
// Storage.addTodo(todo2);
// Storage.addTodo(todo3);
// Storage.addTodo(todo4);
// Storage.addTodo(todo5);
// Storage.addTodo(todo6);
// Storage.addTodo(todo7);
