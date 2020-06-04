import User from './user';

class Traveler extends User {
	constructor(data, username, pwd) {
		super(username, pwd);
		this.id = data.id;
		this.name = data.name;
		this.travelerType = data.travelerType;
	}

	//off trips data + today's date...
	//(1) find the users past trips
	
	//(2) find users current trips
	
	//(3) find users upcoming trips
	
	//(4) find users pending trips

}

export default Traveler;