export default function myListenForNewBtnClick() {
	const newBtnClick = {
		giveEachNewItemAnEvent() {
			document.addEventListener('click', e => {
				if (e.target.classList.contains('newBtnWrap')) {
					const myNodeList = document.querySelectorAll('.formwrap');
					for (let item of myNodeList) {
						if (item === e.target.parentNode.childNodes[1]) {
							e.target.parentNode.childNodes[1].classList.toggle(
								'formInactive'
							);
						} else {
							item.classList.add('formInactive');
						}
					}
				}
			});
		},
	};
	document.addEventListener('DOMContentLoaded', () =>
		newBtnClick.giveEachNewItemAnEvent()
	);
}
