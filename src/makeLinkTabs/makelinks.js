import './makelinks.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

export default class MakeLinks {
	static init(parent) {
		this.parent = parent;
		this.createLinkWrap();
		this.renderButtons();
	}
	static createLinkWrap() {
		this.linkwrap = document.createElement('div');
		this.linkwrap.classList.add('linkwrap');
		this.parent.appendChild(this.linkwrap);
		this.createButtonHolder();
		this.buttonsWithIconsGoHere();
	}
	static createButtonHolder() {
		this.buttonHolder = document.createElement('div');
		this.buttonHolder.classList.add('buttonHolder');
		this.linkwrap.appendChild(this.buttonHolder);
	}
	static buttonsWithIconsGoHere() {
		this.iconButtonHolder = document.createElement('div');
		this.iconButtonHolder.classList.add('iconButtonHolder');
		this.buttonHolder.appendChild(this.iconButtonHolder);
	}
	static makeButtons(elementName, textcontent, iconInfo) {
		this.elementName = document.createElement('button');
		this.elementName.classList.add('navbtn', elementName);
		this.elementName.innerHTML = `${iconInfo} ${textcontent}`;
		this.iconButtonHolder.append(this.elementName);
	}
	static nonBtnProjectTxt() {
		this.projecttext = document.createElement('div');
		this.projecttext.classList.add('projecttext');
		this.projecttext.textContent = 'Projects';
		this.buttonHolder.appendChild(this.projecttext);
	}
	static makeAddProjectBtn() {
		this.addprojectbtn = document.createElement('button');
		this.addprojectbtn.classList.add('addprojectbtn');
		this.addprojectbtn.textContent = '+';
		this.buttonHolder.appendChild(this.addprojectbtn);
	}

	//! make plus button separate as to add text = 'add project'
	//!append dynamic user made projects to projects / prepend to add project + btn
	static renderButtons() {
		this.makeButtons('allBtn', 'All', `<i class="fas fa-list"></i>`);
		this.makeButtons('todaybtn', 'Today', `<i class="fas fa-inbox"></i>`);
		this.makeButtons('weekbtn', 'Week', `<i class="fas fa-calendar-week"></i>`);
		this.nonBtnProjectTxt();
		this.makeAddProjectBtn();
	}
}
