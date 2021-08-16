import MyGenerateRandomID from '../generateRandomID/genRanID';

export default class Projects {
	constructor(name) {
		this.name = name;
		this.id = MyGenerateRandomID.giveUniqueId();
	}
	rename(newName) {
		this.name = newName;
	}
}
