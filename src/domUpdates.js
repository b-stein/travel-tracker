let domUpdates = {
  displayAgentDash() {
		this.querySelector('.login-wrapper').classList.add('hide');    // document.querySelector('.login-wrapper').classList.add('hide');
    this.querySelector('.agent-dash').classList.remove('hide');
	},
	
	querySelector(cssSelector) {
		return document.querySelector(cssSelector);
	},

  displayUserDash(user, destinations) {
    document.querySelector('.login-wrapper').classList.add('hide');
    document.querySelector('.traveler-dash').classList.remove('hide');
		this.displayUserInfo(user, destinations);
	},
	
	displayErrorLoginMsg() {
		document.querySelector('.login-error').innerText = 'Incorrect username or password!'
	},

	displayUserInfo(user, destinations) {
		document.querySelector('.welcome-banner').innerText = `Welcome ${user.name}!`;
		let currentTripsHTML = document.querySelector('.current-trips-container');
		let upcomingTripsHTML = document.querySelector('.upcoming-trips-container');
		let pastTripsHTML = document.querySelector('.past-trips-container');
		let pendingTripsHTML = document.querySelector('.pending-trips-container');
		this.generateTripCards(currentTripsHTML, user.activeTrips);
		this.generateTripCards(upcomingTripsHTML, user.upcomingTrips, destinations);
		this.generateTripCards(pastTripsHTML, user.pastTrips, destinations);
		this.generateTripCards(pendingTripsHTML, user.pendingTrips, destinations);
	},

	generateTripCards(elementContainer, tripArray, destinations) {
		tripArray.forEach(trip => {
			let foundDestSpec = destinations.find(dest => dest.id === trip.destinationID);
			let cardHtml = `
			<div class='trip-card' id=${trip.id}>
				<h3>${foundDestSpec.destination}</h3>
				<div class='card-photo-container'>
					<img src=${foundDestSpec.image} class='card-photo' alt='${foundDestSpec.alt}'> 
					<div class="text">
          	<div class="information">Click for Details</div>
        	</div>
				</div>
				<h4>Date: ${trip.date}, Duration: ${trip.duration} days</h4>
			</div>`;
			elementContainer.insertAdjacentHTML('beforeend', cardHtml);
		})
	}
}

export default domUpdates;