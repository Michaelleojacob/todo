import './uichanges.css';
import MakeDiv from '../makeDiv/makeDiv';
import Storage from '../storage/storage';
import myRenderNewButton from '../newButtonFactory/renderNewButton';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

export default class myuichanges {
	static init(parent) {
		this.parent = parent;
		this.makeTodoWrapper();
		this.eventDeligation();
		this.simulateClick();
	}
	static removeAllChildNodes(parent) {
		while (parent.firstChild) {
			parent.removeChild(parent.firstChild);
		}
	}
	static makeTodoWrapper() {
		this.contentWrapper = MakeDiv({
			elementName: 'contentWrapper',
			parentEl: myuichanges.parent,
		});
		this.contentWrapper.setAttribute('id', 'myContentWrapper');
		return this.contentWrapper;
	}
	static handleClickLogic(event) {
		if (event.target.className.includes('allBtn')) {
			const text = event.target.textContent.trim();
			myuichanges.makeCompletedUI({
				divName: text.toLowerCase(),
				textcontent: text,
				objProperty: 'getAllTodos',
				filterBy: 'all',
				displayFrom: false,
				btnName: 'myNewTask',
				id: 'newTask',
				text: 'new task',
				parent: myuichanges.contentWrapper,
			});
		}
		if (event.target.className.includes('todaybtn')) {
			const text = event.target.textContent.trim();
			myuichanges.makeCompletedUI({
				divName: text.toLowerCase(),
				textcontent: text,
				objProperty: 'date',
				filterBy: '5/5/2021',
			});
		}
		if (event.target.className.includes('weekbtn')) {
			const text = event.target.textContent.trim();
			myuichanges.makeCompletedUI({
				divName: text.toLowerCase(),
				textcontent: text,
				objProperty: 'date',
				filterBy: '1/1/2021',
			});
		}
		if (event.target.className.includes('userproj')) {
			const divName = event.target.classList[0];
			const titleText = event.target.textContent.trim();
			myuichanges.makeCompletedUI({
				divName: divName.toLowerCase(),
				textcontent: titleText,
				objProperty: 'from',
				filterBy: titleText,
				displayFrom: false,
				id: 'newProjTask',
				text: 'new task',
				parent: myuichanges.contentWrapper,
			});
		}
	}
	static eventDeligation() {
		document.addEventListener('click', this.handleClickLogic);
	}
	static makeContentTitle(divName, textcontent) {
		myuichanges.removeAllChildNodes(myuichanges.contentWrapper);
		this.dynamicDiv = MakeDiv({
			elementName: divName,
			text: textcontent,
			parentEl: this.contentWrapper,
		});
		this.dynamicDiv.classList.add('contenttitle');
		return this.dynamicDiv;
	}
	static getFilteredArray(objProperty, filterBy) {
		this.allArr = Storage.getTodos();
		this.filteredArr = [];
		this.allArr.filter(x => {
			if (x[objProperty] === filterBy) {
				this.filteredArr.push(x);
			}
		});
		return this.filteredArr;
	}
	static makeTodoItems(arr) {
		for (let item of arr) {
			this.itemWrapper = document.createElement('div');
			this.itemWrapper.classList.add('itemWrapper');
			this.checkPlusText = document.createElement('div');
			this.checkPlusText.classList.add('checkPlusText');
			this.itemBtn = document.createElement('button');
			this.itemBtn.classList.add('itemBtn');
			this.itemBtn.innerHTML = `<i class="far fa-check-circle"></i> `;
			this.itemName = document.createElement('div');
			this.itemName.classList.add('todoItem');
			if (item.from !== 'all') {
				this.itemName.innerHTML = `<div class="eachItemName">${item.name}</div> <div class="eachItemDate">(${item.from})</div>`;
			} else {
				this.itemName.innerHTML = `<div class="eachItemName">${item.name}</div>`;
			}
			this.dateAndDel = document.createElement('div');
			this.dateAndDel.classList.add('dateAndDel');
			this.itemDate = document.createElement('div');
			this.itemDate.classList.add('itemDate');
			this.itemDate.textContent = `${item.date}`;
			this.todoDelete = document.createElement('button');
			this.todoDelete.classList.add('todoDelete');
			this.todoDelete.textContent = 'X';

			this.contentWrapper.appendChild(this.itemWrapper);
			this.itemWrapper.appendChild(this.checkPlusText);
			this.itemWrapper.appendChild(this.dateAndDel);

			this.checkPlusText.appendChild(this.itemBtn);
			this.checkPlusText.appendChild(this.itemName);
			this.dateAndDel.appendChild(this.itemDate);
			this.dateAndDel.appendChild(this.todoDelete);
		}
	}
	static makeAddNewButton(id) {
		this.newBtnWrap = document.createElement('button');
		this.newBtnWrap.classList.add('newBtnWrap');
		this.newBtnWrap.setAttribute('id', id);
		this.newBtnWrap.innerHTML = `<i class="plusIcon fas fa-plus"></i> <span class="newTodotxt">new task</span>`;
		this.contentWrapper.appendChild(this.newBtnWrap);
	}
	static makeCompletedUI({
		divName,
		textcontent,
		objProperty,
		filterBy,
		displayFrom,
		btnName,
		id,
		text,
		parent,
	}) {
		this.makeContentTitle(divName, textcontent);
		const myfilteredarr = this.getFilteredArray(objProperty, filterBy);
		this.makeTodoItems(myfilteredarr, displayFrom);
		if (displayFrom === false) {
			myRenderNewButton({ btnName, id, text, parent });
		}
	}
	static simulateClick() {
		document.addEventListener('DOMContentLoaded', e => {
			document.querySelector('.allBtn').click();
		});
	}
}
