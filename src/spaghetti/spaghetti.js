import './spaghetti.css';

export default function myListenForNewBtnClick() {
	const newBtnClick = {
		giveEachNewItemAnEvent() {
			document.addEventListener('click', e => {
				if (e.target.classList.contains('newBtnWrap')) {
					newBtnClick.closeAnyActiveForms();
					e.target.parentNode.childNodes[1].classList.toggle('formInactive');
				}
			});
		},
		closeAnyActiveForms() {
			const myNodeList = document.querySelectorAll('.formwrap');
			for (let item of myNodeList) {
				item.classList.add('formInactive');
			}
		},
	};
	document.addEventListener('DOMContentLoaded', () =>
		newBtnClick.giveEachNewItemAnEvent()
	);
}
