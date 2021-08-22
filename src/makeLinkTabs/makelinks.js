import './makelinks.css';
import myRenderNewButton from '../newButtonFactory/renderNewButton';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

export default class MakeLinks {
	static init(parent) {
		this.parent = parent;
		this.createLinkWrap();
		this.makeProjectsDiv();
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
		this.elementName.classList.add('navbtn', elementName, 'nav');
		this.elementName.innerHTML = `${iconInfo} ${textcontent}`;
		this.iconButtonHolder.append(this.elementName);
	}
	static makeProjectsDiv() {
		this.projDiv = document.createElement('div');
		this.projDiv.classList.add('projDiv');
		this.parent.appendChild(this.projDiv);
	}
	static nonBtnProjectTxt() {
		this.projecttext = document.createElement('div');
		this.projecttext.classList.add('projecttext', 'nav');
		this.projecttext.textContent = 'Projects';
		this.projDiv.appendChild(this.projecttext);
	}
	static makeAddProjectBtn() {
		this.newProjBtn = myRenderNewButton({
			id: 'newProject',
			text: 'new project',
			parent: MakeLinks.projDiv,
		});
		this.newProjBtn.style.width = `100%`;
	}

	//! make plus button separate as to add text = 'add project'
	//!append dynamic user made projects to projects / prepend to add project + btn
	static renderButtons() {
		this.makeButtons(
			'allBtn',
			'All',
			`<i class="fas svg linkicon fa-list"></i>`
		);
		this.makeButtons(
			'todaybtn',
			'Today',
			`<i class="fas svg linkicon fa-inbox"></i>`
		);
		this.makeButtons(
			'weekbtn',
			'Week',
			`<i class="fas svg linkicon fa-calendar-week"></i>`
		);
		this.nonBtnProjectTxt();
		this.makeAddProjectBtn();
	}
}
