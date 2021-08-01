import './navMenu.css';

export default function MyNavMenuDisplay(parent) {
	const navMenu = {
		init: function (parent) {
			this.makeStaticNavMenuArea();
			this.makeDummyContent();
		},
		makeStaticNavMenuArea: function () {
			this.navmenuarea = document.createElement('div');
			this.navmenuarea.setAttribute('id', 'navmenuarea');
			this.navmenuarea.classList.add('inactive');
			parent.appendChild(this.navmenuarea);
		},
		//! the contents of navMenuArea are going to come from sidebar. !\\
		//? renderTabs(this.navmenuarea) ?\\
		makeDummyContent: function () {
			this.dummbyplaceholder = document.createElement('div');
			this.dummbyplaceholder.classList.add('dumbplace');
			this.navmenuarea.appendChild(this.dummbyplaceholder);
		},
		// makeDummyContent: function () {},
		// makeDummyContent: function () {},
		// makeDummyContent: function () {},
		// makeDummyContent: function () {},
	};
	navMenu.init();
}
