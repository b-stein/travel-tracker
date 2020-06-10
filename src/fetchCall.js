class FetchCall {
	constructor() {
		this.rootURL = 'https://fe-apps.herokuapp.com/api/v1/travel-tracker/data';
	}

	getTravelers() {
		let url = `${this.rootURL}/travelers/travelers`;
		return fetch(url)
						.then(response => response.json())
						.catch(err => console.log(err.message))
	}

	getTrips() {
		let url = `${this.rootURL}/trips/trips`;
		return fetch(url)
						.then(response => response.json())
						.catch(err => console.log(err.message))
	}

	getDestinations() {
		let url = `${this.rootURL}/destinations/destinations`;
		return fetch(url)
						.then(response => response.json())
						.catch(err => console.log(err.message))
	}

	postBookingRequest(givenTrip) {
		let url = `${this.rootURL}/trips/trips`;
		return fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(givenTrip)
		})
			.then(response => response.json())
			.then(data => console.log(data))
			.catch(err => console.log(err.message))
	}

	approveTrip(givenTrip) {
		let url = `${this.rootURL}/trips/updateTrip`;
		return fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(givenTrip)
		})
			.then(response => response.json())
			.then(data => console.log(data))
			.catch(err => console.log(err.message))
	}

	deleteTrip(givenTrip) {
		let url = `${this.rootURL}/trips/trips`;
		return fetch(url, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(givenTrip)
		})
			.then(response => response.json())
			.then(data => console.log(data))
			.catch(err => console.log(err.message))
	}
}

export default FetchCall;