class User {
	constructor(username, pwd) {
		this.username = username;
		this.pwd = pwd;
		this.authenticated = false;
		this.agency = false;
	}

	authenticate() {
		if (this.pwd === 'travel2020') {
			this.authenticated = true;
		}
		if (this.username === 'agency') {
			this.agency = true;
		}
	}
}

export default User;