export default function myNavEvent() {
	const navEvent = {
		init: function () {
			this.cacheDom();
			this.addListenerToNav();
		},
		cacheDom: function () {
			this.elementListening = document.querySelector('.bicon');
			this.elementToChange = document.querySelector('#navmenuarea');
		},
		targetWasNavBurger: function (event) {
			if (
				navEvent.elementToChange.style.display === '' ||
				navEvent.elementToChange.style.display === 'none'
			) {
				navEvent.elementToChange.style.display = 'flex';
			} else {
				navEvent.elementToChange.style.display = 'none';
			}
		},
		addListenerToNav: function () {
			this.elementListening.addEventListener('click', this.targetWasNavBurger);
		},
	};
	navEvent.init();
}
