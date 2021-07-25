import './content.css';
import sidebar from './../ui/sidebar/sidebar';
import displayArea from './../ui/maincontent/displayarea';

export default function mycontent(parent) {
	const content = {
		init: function () {
			this.createDivToParent();
		},
		createDivToParent: function () {
			this.content = document.createElement('div');
			this.content.classList.add('content');
			parent.appendChild(this.content);
		},
		renderSideBar: function () {},
		renderMainDisplayArea: function () {},
	};
	content.init();
}
