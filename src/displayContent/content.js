import './content.css';
export default function myContent(parent) {
	'use strict';
	const content = {
		init: function (parent) {
			this.makeContentWrapper();
		},
		makeContentWrapper: function () {
			this.contentwrap = document.createElement('div');
			this.contentwrap.classList.add('contentwrap');
			this.contentwrap.textContent = 'content';
			parent.appendChild(this.contentwrap);
		},
	};
	content.init();
}
