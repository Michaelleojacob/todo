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
			console.log(navEvent.elementToChange.className);
			if (
				navEvent.elementToChange.className === 'inactive' ||
				navEvent.elementToChange.className === ''
			) {
				return (navEvent.elementToChange.className = 'active');
			} else {
				return (navEvent.elementToChange.className = 'inactive');
			}
		},
		addListenerToNav: function () {
			this.elementListening.addEventListener('click', this.targetWasNavBurger);
		},
	};
	navEvent.init();
}
