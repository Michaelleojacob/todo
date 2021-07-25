import './burger.css';

export default function myburger(bicon, container) {
	const burger = {
		init: function () {
			this.createBurgDiv();
			this.renderButtons();
		},
		createBurgDiv: function () {
			this.burgDiv = document.createElement('div');
			this.burgDiv.classList.add('burgDiv');
			container.appendChild(this.burgDiv);
			this.createBurgerWrapper();
		},
		createBurgerWrapper: function () {
			this.burgwrap = document.createElement('div');
			this.burgwrap.classList.add('burgwrap');
			this.burgDiv.appendChild(this.burgwrap);
		},
		makeButton: function (elementName, textcontent) {
			this.elementName = document.createElement('button');
			this.elementName.classList.add('navbtn', elementName);
			this.elementName.textContent = textcontent;
			this.burgwrap.append(this.elementName);
		},
		staticProjectText: function () {
			this.projecttext = document.createElement('div');
			this.projecttext.classList.add('navbtn', 'projecttext');
			this.projecttext.textContent = 'Projects';
			this.burgwrap.appendChild(this.projecttext);
		},
		appendProjectstoStaticProjectText: function () {
			//append projects here;
		},
		renderButtons: function () {
			this.makeButton('allBtn', 'All');
			this.makeButton('todaybtn', 'Today');
			this.makeButton('weekbtn', 'Week');
			this.staticProjectText();
			this.makeButton('projectBtn', '+');
		},
		createBurgEvent: function () {
			bicon.addEventListener('click', this.burgEventLogic);
		},
		burgEventLogic: function (event) {
			console.log(event);
			burger.createBurgDiv();
		},
	};
	burger.init();
}
