import './spaghetti.css';
import MakeDiv from '../makeDiv/makeDiv';
import Storage from '../storage/storage';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

//! give all/today/week and unique projects an identifier for clickDel !\\
export default function myspaghetti(parent) {
	const spaghetti = {
		init() {
			console.log(parent);
			console.log(Storage.getTodos());
			this.makeSphaghWrapper();
			this.eventDeligation();
			this.staticAll();
		},
		removeAllChildNodes(parent) {
			while (parent.firstChild) {
				parent.removeAllChild(parent.firstChild);
			}
		},
		makeSphaghWrapper() {
			this.contentWrapper = MakeDiv({
				elementName: 'contentWrapper',
				parentEl: parent,
			});
			return this.contentWrapper;
		},
		staticAll() {
			this.allDiv = MakeDiv({
				elementName: 'allTitle',
				text: 'All',
				parentEl: this.contentWrapper,
			});
			this.allDiv.classList.add('contenttitle');
			const todos = Storage.getTodos();
			this.makeTodoItems(todos);
		},
		handleClickLogic(event) {
			console.log(event);
		},
		eventDeligation() {
			document.addEventListener('click', this.handleClickLogic);
		},
		makeTodoItems(arr) {
			for (let item of arr) {
				this.itemWrapper = document.createElement('div');
				this.itemWrapper.classList.add('itemWrapper');
				this.itemParent = document.createElement('div');
				this.itemParent.classList.add('itemParent');
				this.itemBtn = document.createElement('button');
				this.itemBtn.classList.add('itemBtn');
				this.itemBtn.innerHTML = `<i class="far fa-check-circle"></i> `;
				this.itemName = document.createElement('div');
				this.itemName.classList.add('todoItem');
				this.itemName.innerHTML = ` ${item.name} (${item.from})`;
				this.itemDate = document.createElement('div');
				this.itemDate.textContent = `${item.date}`;
				this.contentWrapper.appendChild(this.itemWrapper);
				this.itemWrapper.appendChild(this.itemParent);
				this.itemParent.appendChild(this.itemName);
				this.itemParent.appendChild(this.itemDate);
				this.itemWrapper.prepend(this.itemBtn);
			}
		},
	};
	spaghetti.init();
}

// function removeAllChildNodes(parent) {
// 	while (parent.firstChild) {
// 		parent.removeChild(parent.firstChild);
// 	}
// }

// document.addEventListener('DOMContentLoaded', () => {
// 	let parent = document.querySelector('.contentwrap');
// 	let titlewrap = MakeDiv({
// 		elementName: 'titlewrap',
// 		parentEl: parent,
// 	});
// 	document.addEventListener('click', e => {
// 		console.log(e.target.innerText);
// 		function makeDivFromClick(targetName) {
// 			removeAllChildNodes(titlewrap);
// 			return MakeDiv({
// 				elementName: targetName,
// 				text: targetName,
// 				parentEl: titlewrap,
// 			});
// 		}
// 		if (e.target.className.includes('navbtn')) {
// 			if (e.target.innerText.toLowerCase() === 'all') {
// 				const grabAllDiv = makeDivFromClick(e.target.innerText);
// 				//! need unique div for unique functionality. !\\
// 			}
// 			if (e.target.innerText.toLowerCase() === 'today') {
// 				makeDivFromClick(e.target.innerText);
// 			}
// 			if (e.target.innerText.toLowerCase() === 'week') {
// 				makeDivFromClick(e.target.innerText);
// 			}
// 		}
// 	});
// });
