import './ui.css';

export default function ui() {
	(function () {
		const ui = {
			init: function () {
				this.cacheDom();
			},
			cacheDom: function () {
				this.container = document.querySelector('#container');
				this.makeUiWrapper();
			},
			makeUiWrapper: function () {
				this.uiwrapper = document.createElement('div');
				this.uiwrapper.classList.add('uiwrapper');
				this.container.append(this.uiwrapper);
			},
		};
		ui.init();
	})();
}
