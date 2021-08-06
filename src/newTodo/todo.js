export default class Todo {
	constructor(name, date) {
		this.name = name;
		this.date = date;
	}
	todoName(newName) {
		this.name = newName;
	}
	static myfunc() {
		var S4 = function () {
			return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
		};
		return (
			S4() +
			S4() +
			'-' +
			S4() +
			'-' +
			S4() +
			'-' +
			S4() +
			'-' +
			S4() +
			S4() +
			S4()
		);
	}
}
