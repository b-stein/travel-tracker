let domUpdates = {
  displayAgentDash(agent, destinations, today) {
		this.querySelector('.login-wrapper').classList.add('hide');
		this.querySelector('.agent-dash').classList.remove('hide');
		this.querySelector('.search').classList.remove('hide');
		this.displayAgentInfo(agent, destinations, today);
	},
	
	querySelector(cssSelector) {
		return document.querySelector(cssSelector);
	},

  displayUserDash(user, destinations, today) {
    document.querySelector('.login-wrapper').classList.add('hide');
    document.querySelector('.traveler-dash').classList.remove('hide');
		document.querySelector('.book-trip').classList.remove('hide');
		this.displayUserInfo(user, destinations, today);
	},
	
	displayErrorLoginMsg() {
		document.querySelector('.login-error').innerText = 'Incorrect username or password!'
	},

	displayUserInfo(user, destinations, today) {
		const yearCosts = user.findYearTripCost(today, destinations);
		document.querySelector('.welcome-banner').innerText = `Welcome ${user.name}!`;
		document.querySelector('.yr-trip-cost').innerText = `${today.substring(0, 4)} trips costs: ${yearCosts}`;
		let currentTripsHTML = document.querySelector('.current-trips-container');
		let upcomingTripsHTML = document.querySelector('.upcoming-trips-container');
		let pastTripsHTML = document.querySelector('.past-trips-container');
		let pendingTripsHTML = document.querySelector('.pending-trips-container');
		this.generateTripCards(currentTripsHTML, user.activeTrips, destinations);
		this.generateTripCards(upcomingTripsHTML, user.upcomingTrips, destinations);
		this.generateTripCards(pastTripsHTML, user.pastTrips, destinations);
		this.generateTripCards(pendingTripsHTML, user.pendingTrips, destinations);
	},

	displayAgentInfo(agent, destinations,today) {
		const yearRevenue = agent.findYearRevenue(today, destinations);
		document.querySelector('.revenue').innerText = `${today.substring(0, 4)} current revenue: ${yearRevenue}`;
		let requestsHTML = document.querySelector('.request-container');
		let currentTripsHTML = document.querySelector('.active-trips-container');
		this.generateTripCards(requestsHTML, agent.pendingTrips, destinations);
		this.generateTripCards(currentTripsHTML, agent.activeTrips, destinations);
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
	},

	displayReqForm(e) {
		document.querySelector('.post-to-trips').classList.remove('hide');
	},

	exitForm() {
		document.querySelector('.post-to-trips').classList.add('hide');
	}
}

export default domUpdates;