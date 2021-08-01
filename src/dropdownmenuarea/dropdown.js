import MyBurgLogic from '../burgerLogic/burgerlogic';

export default function mydropdown(parent) {
	const dropdown = {
		init: function (parent) {
			this.parent = parent;
			this.makeDropDownDiv();
		},
		makeDropDownDiv: function () {
			this.dropDownArea = document.createElement('div');
			this.dropDownArea.classList.add('dropDownArea');
			this.parent.appendChild(this.dropDownArea);
		},
	};
	dropdown.init(parent);
}
