import './burger.css';

export default function myburger(parent) {
	const burger = {
		init: function () {
			this.createBurgEvent();
		},
		createBurgEvent: function () {
			parent.addEventListener('click', this.burgEventLogic);
		},
		burgEventLogic: function (event) {
			console.log(event);
		},
	};
	burger.init();
}
