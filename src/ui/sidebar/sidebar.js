import './sidebar.css';

export default function mysidebar(parent) {
	const sidebar = {
		init: function () {
			this.makeSideBarWrapper();
		},
		makeSideBarWrapper: function () {
			this.sbwrapper = document.createElement('div');
			this.sbwrapper.classList.add('sbwrapper');
			parent.appendChild(this.sbwrapper);
		},
	};
	return sidebar.init();
}
