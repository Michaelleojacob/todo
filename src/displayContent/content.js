import './content.css';
import AllTasks from './../allTasks/all';

export default function myContent(parent) {
	'use strict';
	const content = {
		init: function (parent) {
			this.makeContentWrapper();
			this.renderAllTasks();
		},
		makeContentWrapper: function () {
			this.contentwrap = document.createElement('div');
			this.contentwrap.classList.add('contentwrap');
			parent.appendChild(this.contentwrap);
		},
		renderAllTasks: function () {
			AllTasks.init(content.contentwrap);
		},
	};
	content.init();
}
