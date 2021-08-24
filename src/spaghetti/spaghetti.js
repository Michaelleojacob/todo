import './spaghetti.css';

export default function myListenForNewBtnClick() {
	const newBtnClick = {
		init() {
			document.addEventListener('DOMContentLoaded', () => {
				const myElement = document.getElementById('newTask');
				myElement.addEventListener('click', e => {
					e.target.parentNode.childNodes[1].classList.toggle('formInactive');
				});
			});
		},
	};
	newBtnClick.init();
}
