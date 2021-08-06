import './content.css';
import MakeDiv from '../makeDiv/makeDiv';

export default function myContent(parent) {
	'use strict';
	const content = {
		init: function () {
			this.renderContentWrapper();
			// this.renderTitle();
		},
		renderContentWrapper: function () {
			this.contentwrap = MakeDiv({
				elementName: 'contentwrap',
				text: null,
				parentEl: parent,
			});
		},
		// renderTitle: function () {
		// 	this.title = MakeDiv({
		// 		elementName: 'title',
		// 		text: 'Title',
		// 		parentEl: this.contentwrap,
		// 	});
		// },
	};
	content.init();
}
