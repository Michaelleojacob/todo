import './spaghetti.css';

export default function myListenForNewBtnClick() {
	const newBtnClick = {
		init() {
			// const myElement = document.getElementById('newTask');
			// myElement.addEventListener('click', e => {
			// 	e.target.parentNode.childNodes[1].classList.toggle('formInactive');
			// });
		},
		initTwo() {
			document.addEventListener('click', e => {
				console.log(e.target);
				if (e.target.classList.contains('newBtnWrap')) {
					e.target.parentNode.childNodes[1].classList.toggle('formInactive');
				}
			});
		},
	};
	document.addEventListener('DOMContentLoaded', () => newBtnClick.initTwo());
}
