import './content.css';

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
	};
	content.init();
}
