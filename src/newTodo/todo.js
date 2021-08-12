export default class Todo {
	constructor(name, date, from) {
		this.name = name;
		this.date = date;
		this.from = from;
	}
	todoName(newName) {
		this.name = newName;
	}
	todoFrom(from) {
		this.from = from;
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
