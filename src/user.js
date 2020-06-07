class User {
	constructor(username, pwd, isAuthenticated = false, isAgency = false) {
		this.username = username;
		this.pwd = pwd;
		this.authenticated = isAuthenticated;
		this.agency = isAgency;
	}

	authenticate() {
		if (this.pwd === 'travel2020') {
			this.authenticated = true;
		}
		if (this.username === 'agency') {
			this.agency = true;
		}
		if (Number(this.username.slice(-2)) > 50) {
			this.authenticated = false;
		}
	}
}

export default User;