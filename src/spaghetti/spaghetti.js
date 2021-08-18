import './spaghetti.css';
import Storage from '../storage/storage';
import MakeDiv from '../makeDiv/makeDiv';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

export default class Spaghetti {
	static init() {
		this.grabParent();
		this.makeProjWrap();
		this.appendProjects();
	}
	static grabParent() {
		this.parent = document.querySelector('.projecttext');
	}
	static makeProjWrap() {
		this.projwrap = MakeDiv({
			elementName: 'projwrap',
			parentEl: this.parent,
		});
		return this.projwrap;
	}
	static appendProjects() {
		this.allProjects = Storage.getProjects();
		this.allProjects.forEach(project => {
			this.eachwrap = document.createElement('button');
			this.eachwrap.classList.add(`${project.name.trim().split(' ').join('')}`);
			this.eachwrap.classList.add('userproj');
			this.eachwrap.innerHTML = `<i class="projicon far fa-folder"></i> <span class ="projtext">${project.name}<span/>`;
			this.projwrap.appendChild(this.eachwrap);
		});
	}
}
