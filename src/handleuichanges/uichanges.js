import './uichanges.css';
import MakeDiv from '../makeDiv/makeDiv';
import Storage from '../storage/storage';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

export default function myuichanges(parent) {
	const uichanges = {
		init() {
			this.makeSphaghWrapper();
			this.eventDeligation();
			this.simulateClick();
		},
		removeAllChildNodes(parent) {
			while (parent.firstChild) {
				parent.removeChild(parent.firstChild);
			}
		},
		makeSphaghWrapper() {
			this.contentWrapper = MakeDiv({
				elementName: 'contentWrapper',
				parentEl: parent,
			});
			return this.contentWrapper;
		},
		handleClickLogic(event) {
			if (event.target.className.includes('allBtn')) {
				const text = event.target.textContent.trim();
				uichanges.makeCompletedUI({
					divName: text.toLowerCase(),
					textcontent: text,
					objProperty: 'getAllTodos',
					filterBy: 'all',
				});
			}
			if (event.target.className.includes('todaybtn')) {
				const text = event.target.textContent.trim();
				uichanges.makeCompletedUI({
					divName: text.toLowerCase(),
					textcontent: text,
					objProperty: 'date',
					filterBy: '5/5/2021',
				});
			}
			if (event.target.className.includes('weekbtn')) {
				const text = event.target.textContent.trim();
				uichanges.makeCompletedUI({
					divName: text.toLowerCase(),
					textcontent: text,
					objProperty: 'date',
					filterBy: '1/1/2021',
				});
			}
			if (event.target.className.includes('userproj')) {
				event.stopPropagation();
				event.preventDefault();
				const divName = event.target.classList[0];
				const titleText = event.target.textContent.trim();
				uichanges.makeCompletedUI({
					divName: divName.toLowerCase(),
					textcontent: titleText,
					objProperty: 'from',
					filterBy: titleText,
				});
			}
		},
		eventDeligation() {
			document.addEventListener('click', this.handleClickLogic);
		},
		makeContentTitle(divName, textcontent) {
			uichanges.removeAllChildNodes(uichanges.contentWrapper);
			this.dynamicDiv = MakeDiv({
				elementName: divName,
				text: textcontent,
				parentEl: this.contentWrapper,
			});
			this.dynamicDiv.classList.add('contenttitle');
			return this.dynamicDiv;
		},
		getFilteredArray(objProperty, filterBy) {
			this.allArr = Storage.getTodos();
			this.filteredArr = [];
			this.allArr.filter(x => {
				if (x[objProperty] === filterBy) {
					this.filteredArr.push(x);
				}
			});
			return this.filteredArr;
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
				if (item.from !== 'all') {
					this.itemName.innerHTML = `${item.name} (${item.from})`;
				} else {
					this.itemName.innerHTML = `${item.name}`;
				}
				this.itemDate = document.createElement('div');
				this.itemDate.textContent = `${item.date}`;
				this.contentWrapper.appendChild(this.itemWrapper);
				this.itemWrapper.appendChild(this.itemParent);
				this.itemParent.appendChild(this.itemName);
				this.itemParent.appendChild(this.itemDate);
				this.itemWrapper.prepend(this.itemBtn);
			}
		},
		simulateClick() {
			document.addEventListener('DOMContentLoaded', e => {
				document.querySelector('.allBtn').click();
			});
		},
		makeCompletedUI({
			divName,
			textcontent,
			objProperty,
			filterBy,
			displayFrom,
		}) {
			this.makeContentTitle(divName, textcontent);
			const myfilteredarr = this.getFilteredArray(objProperty, filterBy);
			this.makeTodoItems(myfilteredarr, displayFrom);
		},
	};
	uichanges.init();
}
