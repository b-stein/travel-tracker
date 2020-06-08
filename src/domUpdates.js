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

	displayAgentInfo(agent, destinations, today) {
		const yearRevenue = agent.findYearRevenue(today, destinations);
		document.querySelector('.revenue').innerText = `${today.substring(0, 4)} current revenue: ${yearRevenue}`;
		let requestsHTML = document.querySelector('.request-container');
		let currentTripsHTML = document.querySelector('.active-trips-container');
		this.generatePendRequests(requestsHTML, agent.pendingTrips, destinations);
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

	generatePendRequests(elementContainer, tripArray, destinations) {
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
				<div class='card-bottom'>
					<h4>Date: ${trip.date}, Duration: ${trip.duration} days</h4>
					<button type="approve" class='approve-btn'>Approve</button>
					<button type="deny" class='deny-btn'>Deny</button>
				</div>
			</div>`;
			elementContainer.insertAdjacentHTML('beforeend', cardHtml);
		})
	},

	displayReqForm() {
		document.querySelector('.post-to-trips').classList.remove('hide');
		document.querySelector('.chosen-destination').value = 'Lima, Peru';
		document.querySelector('.traveler-input').value = '';
		document.querySelector('.date-picker').value = '';
		document.querySelector('.duration-input').value = '';
		document.querySelector('.estimated-cost').innerText = '';
	},

	exitForm() {
		document.querySelector('.post-to-trips').classList.add('hide');
	},

	displayTripInfo(trips, destinations, allUsers) {
		let tripInfoHTML = document.querySelector('.trip-information');
		tripInfoHTML.classList.remove('hide');
		const tripID = Number(event.target.closest('.trip-card').id);
		const foundTrip = trips.find(trip => trip.id === tripID);
		const foundDest = destinations.find(spot => spot.id === foundTrip.destinationID);
		const foundUser = allUsers.find(user => user.id === foundTrip.userID);
		tripInfoHTML.insertAdjacentHTML("beforebegin", "<section id='overlay'></div>");
		let tripInfo = `
			<button id="exit-btn">X</button>
			<h3 id='trip-title'>${foundDest.destination} Trip</h3>
			<h4>Booked Account</h4>
			<p>${foundUser.name}</p>
			<h4>Travelers on Trip</h4>
			<p>${foundTrip.travelers}</p>
			<h4>Trip length</h4>
			<p>Starts ${foundTrip.date}, lasts ${foundTrip.duration} days.</p>
			<h4>Lodging Costs</h4>
			<p>$${foundDest.estimatedLodgingCostPerDay} per day, for ${foundTrip.duration} days.</p>
			<h4>Flight Cost</h4>
			<p>$${foundDest.estimatedFlightCostPerPerson} per person, for ${foundTrip.travelers} travelers.</p>`
		tripInfoHTML.insertAdjacentHTML('beforeend', tripInfo);
		document.getElementById('trip-title').style.backgroundImage = `url(${foundDest.image})`;
	},

	closeTripInfo() {
		document.querySelector('.trip-information').classList.add('hide');
		document.querySelector('.trip-information').innerHTML = '';
		document.getElementById('overlay').remove();
	},

	displaySearchResults(searchedResults, today, destinations) {
		document.querySelector('.agent-dash').classList.add('hide');
		document.querySelector('.agent-search').classList.remove('hide');
	
		searchedResults.forEach(userResult => {
			const yearPurchases = userResult.findYearTripCost(today, destinations);
			let userPendingTrips = userResult.pendingTrips.map(trip => {
				let foundDestSpec = destinations.find(dest => dest.id === trip.destinationID);
				return `
				<div class='admin-trip-card trip-card' id=${trip.id}>
					<h3>${foundDestSpec.destination}</h3>
					<h4>[pending]</h4>
					<div class='card-photo-container'>
						<img src=${foundDestSpec.image} class='card-photo' alt='${foundDestSpec.alt}'> 
						<div class="text">
							<div class="information">Click for Details</div>
						</div>
					</div>
					<div class='card-bottom'>
						<h4>Date: ${trip.date}, Duration: ${trip.duration} days</h4>
						<button type="approve" class='approve-btn'>Approve</button>
						<button type="deny" class='deny-btn'>Deny</button>
					</div>
				</div>`
			})

			let userUpcomingTrips = userResult.upcomingTrips.map(trip => {
				let foundDestSpec = destinations.find(dest => dest.id === trip.destinationID);
				return `
				<div class='admin-trip-card trip-card' id=${trip.id}>
					<h3>${foundDestSpec.destination}</h3>
					<h4>[upcoming]</h4>
					<div class='card-photo-container'>
						<img src=${foundDestSpec.image} class='card-photo' alt='${foundDestSpec.alt}'> 
						<div class="text">
							<div class="information">Click for Details</div>
						</div>
					</div>
					<div class='card-bottom'>
						<h4>Date: ${trip.date}, Duration: ${trip.duration} days</h4>
						<button type="delete" class='delete-btn'>Delete</button>
					</div>
				</div>`
			})

			let userActiveTrips = userResult.activeTrips.map(trip => {
				let foundDestSpec = destinations.find(dest => dest.id === trip.destinationID);
				return `
				<div class='admin-trip-card trip-card' id=${trip.id}>
					<h3>${foundDestSpec.destination}</h3>
					<h4>[active]</h4>
					<div class='card-photo-container'>
						<img src=${foundDestSpec.image} class='card-photo' alt='${foundDestSpec.alt}'> 
						<div class="text">
							<div class="information">Click for Details</div>
						</div>
					</div>
					<div class='card-bottom'>
						<h4>Date: ${trip.date}, Duration: ${trip.duration} days</h4>
					</div>
				</div>`
			})

			let userPastTrips = userResult.pastTrips.map(trip => {
				let foundDestSpec = destinations.find(dest => dest.id === trip.destinationID);
				return `
				<div class='admin-trip-card trip-card' id=${trip.id}>
					<h3>${foundDestSpec.destination}</h3>
					<h4>[past]</h4>
					<div class='card-photo-container'>
						<img src=${foundDestSpec.image} class='card-photo' alt='${foundDestSpec.alt}'> 
						<div class="text">
							<div class="information">Click for Details</div>
						</div>
					</div>
					<div class='card-bottom'>
						<h4>Date: ${trip.date}, Duration: ${trip.duration} days</h4>
					</div>
				</div>`
			})

			let userSection = `
			<section class='searched-user-container modal' id=${userResult.id}>
				<h3>${userResult.name}</h3>
				<h4>${today.substring(0, 4)} Travel Tracker expenses: ${yearPurchases}</h4>
				<div class='user-trips-container'>
					${userPendingTrips}
					${userUpcomingTrips}
					${userActiveTrips}
					${userPastTrips}
				</div>
			</section>`;
			document.querySelector('.agent-search').insertAdjacentHTML('beforeend', userSection);
		})
	}

	//display each user's name, list of all
	//trips, total amt they've spent
	//bt to approve trip requests & 
	//delete upcoming trips
}

export default domUpdates;