import './navMenu.css';
import MakeLinks from '../makeLinkTabs/makelinks';

export default function MyNavMenuDisplay(parent) {
	const navMenu = {
		init: function (parent) {
			this.makeStaticNavMenuArea();
			this.renderLinks();
		},
		makeStaticNavMenuArea: function () {
			this.navmenuarea = document.createElement('div');
			this.navmenuarea.setAttribute('id', 'navmenuarea');
			this.navmenuarea.classList.add('inactive');
			parent.appendChild(this.navmenuarea);
		},
		renderLinks: function () {
			MakeLinks.init(navMenu.navmenuarea);
		},
	};
	navMenu.init();
}
