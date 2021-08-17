import './spaghetti.css';
import Storage from '../storage/storage';
import MakeDiv from '../makeDiv/makeDiv';

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
			console.log(project.name.trim().split(' ').join(''));
			this.eachProj = document.createElement('button');
			this.eachProj.classList.add(`${project.name.trim().split(' ').join('')}`);
			this.eachProj.classList.add('userproj');
			this.eachProj.textContent = project.name;
			console.log(this.eachProj);
			this.projwrap.appendChild(this.eachProj);
		});
		console.log(this.allProjects);
		// this.parent.appendChild(null);
	}
}
