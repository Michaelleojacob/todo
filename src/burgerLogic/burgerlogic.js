import './burgerlogic.css';

export default class MyBurgLogic {
	static init() {}
}

function myEvent(event) {
	// 	// console.log(event.target);
	if (event.target.className.includes('inactive')) {
		this.parent = document.querySelector('.dropDownArea');
		this.burgmenu = document.createElement('div');
		this.burgmenu.classList.add('burgmenu');
		this.parent.append(this.burgmenu);
	}
}
document.addEventListener('click', myEvent);
