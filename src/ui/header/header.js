import './header.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

export default function myheader(parent) {
	const header = {
		init: function () {
			this.headerWrapper();
		},
		headerWrapper: function () {
			this.hwrapper = document.createElement('div');
			this.hwrapper.classList.add('hwrapper');
			parent.appendChild(this.hwrapper);
			this.renderElements();
		},
		renderElements: function () {
			this.titleIconWrap();
			this.burgerIcon();
		},
		titleIconWrap: function () {
			this.tiwrap = document.createElement('div');
			this.tiwrap.classList.add('tiwrap');
			this.hwrapper.appendChild(this.tiwrap);
			this.addIcon();
			this.addTitle();
		},
		addIcon: function () {
			this.icon = document.createElement('div');
			this.icon.classList.add('hicon');
			this.icon.innerHTML = `<i class="fas fa-check-square"></i>`;
			this.tiwrap.appendChild(this.icon);
		},
		addTitle: function () {
			this.hTitle = document.createElement('div');
			this.hTitle.classList.add('hTitle');
			this.hTitle.textContent = 'Todo';
			this.tiwrap.appendChild(this.hTitle);
		},
		burgerIcon: function () {
			this.bicon = document.createElement('div');
			this.bicon.classList.add('bicon', 'inactive');
			this.bicon.innerHTML = `<i class="fas fa-bars"></i>`;
			this.hwrapper.appendChild(this.bicon);
		},
	};
	return header.init();
}
