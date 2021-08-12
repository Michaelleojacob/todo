import './spaghetti.css';
import MakeDiv from '../makeDiv/makeDiv';
import Storage from '../storage/storage';

export default function myspaghetti(parent) {
	const spaghetti = {
		init() {
			console.log(parent);
			console.log(Storage.getTodos());
			this.eventDeligation();
			this.staticAll();
		},
		removeAllChildNodes(parent) {
			while (parent.firstChild) {
				parent.removeAllChild(parent.firstChild);
			}
		},
		staticAll() {
			const staticall = MakeDiv({
				elementName: 'alltodos',
				text: 'All',
				parentEl: parent,
			});
			const todos = Storage.getTodos();
			for (let item of todos) {
				MakeDiv({
					elementName: item.name,
					text: `${item.name} (${item.from}) ${item.date}`,
					parentEl: staticall,
				});
			}
		},
		handleClickLogic(event) {
			console.log(event);
		},
		eventDeligation() {
			document.addEventListener('click', this.handleClickLogic);
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
