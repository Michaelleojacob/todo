import './navMenu.css';

export default function MyNavMenuDisplay(parent) {
	const navMenu = {
		init: function (parent) {
			this.makeStaticNavMenuArea();
		},
		makeStaticNavMenuArea: function () {
			this.navmenuarea = document.createElement('div');
			this.navmenuarea.setAttribute('id', 'navmenuarea');
			this.navmenuarea.classList.add('inactive');
			// this.navmenuarea.style.display = 'none';
			parent.appendChild(this.navmenuarea);
		},
	};
	navMenu.init();
}
