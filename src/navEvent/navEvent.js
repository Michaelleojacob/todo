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
			navEvent.elementToChange.classList.toggle('active');
		},
		addListenerToNav: function () {
			this.elementListening.addEventListener('click', this.targetWasNavBurger);
		},
	};
	navEvent.init();
}
