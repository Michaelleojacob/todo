import './spaghetti.css';
import MakeDiv from '../makeDiv/makeDiv';
export default function myspaghetti() {}

function removeAllChildNodes(parent) {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}
const myarr = [
	{ name: 'todo1', from: 'all', date: 'today' },
	{ name: 'todo2', from: 'projects', date: 'week' },
	{ name: 'todo3', from: 'all', date: 'month' },
	{ name: 'todo4', from: 'projects', date: 'never' },
];

function displayArr(arr) {
	arr.forEach(x => {
		if (x.from === 'all') {
			console.log(x);
		}
	});
}

document.addEventListener('DOMContentLoaded', () => {
	let parent = document.querySelector('.contentwrap');
	let titlewrap = MakeDiv({
		elementName: 'titlewrap',
		text: null,
		parentEl: parent,
	});
	document.addEventListener('click', e => {
		if (e.target.className.includes('navbtn')) {
			console.log(e.target.innerText.toLowerCase());
			if (e.target.innerText.toLowerCase() === 'all') {
				removeAllChildNodes(titlewrap);
				MakeDiv({
					elementName: 'all',
					text: 'All',
					parentEl: titlewrap,
				});
				MakeDiv({ elementName });
			}
			if (e.target.innerText.toLowerCase() === 'today') {
				removeAllChildNodes(titlewrap);
				MakeDiv({
					elementName: 'today',
					text: 'Today',
					parentEl: titlewrap,
				});
			}
			if (e.target.innerText.toLowerCase() === 'week') {
				removeAllChildNodes(titlewrap);
				MakeDiv({
					elementName: 'week',
					text: 'Week',
					parentEl: titlewrap,
				});
			}
		}
	});
	const all = MakeDiv({
		elementName: 'all',
		text: 'All',
		parentEl: titlewrap,
	});
	myarr.forEach(x => {
		MakeDiv({
			elementName: x.name,
			text: x.name,
			parentEl: all,
		});
	});
});
