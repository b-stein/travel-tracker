import './images/search.png';
import './images/map.png';
import './images/bahamas.jpg';
import './css/base.scss';

import Traveler from './traveler';
import Agent from './agent';
import User from './user';
import domUpdates from './domUpdates';

const usernameInput = document.querySelector('.username-input');
const pwdInput = document.querySelector('.pwd-input');
const agentDash = document.querySelector('.agent-dash');

let today;
let user;
let usernameID;
let allUsers;
let agent;
let trips;
let destinations;

window.addEventListener('load', fetchDate);
document.querySelector('.login-btn').addEventListener('click', (e) => fetchLoginUser(e));
document.querySelector('.book-trip').addEventListener('click', domUpdates.displayReqForm);
document.getElementById('exit-form-btn').addEventListener('click', domUpdates.exitForm);
document.querySelector('.form-btn').addEventListener('click', (e) => findInputs(e, destinations));
document.querySelector('main').addEventListener('click', () => clickHandler(trips, destinations, allUsers));
document.querySelector('.search-btn').addEventListener('click', (e) => searchUsers(e));
document.getElementById('search-mag-btn').addEventListener('submit', (e) => searchUsers(e));
document.querySelector('.back-btn').addEventListener('click', () => domUpdates.displayAgentDash(agent, destinations, today));

function searchUsers(event) {
	event.preventDefault();
	const search = document.getElementById('search-input').value;
	const searchedResults = []
	allUsers.forEach(user => {
		if (user.name.includes(search)) {
			user.findActiveTrips(today);
			user.findUpcomingTrips(today);
			user.findPastTrips(today);
			user.findPendingTrips();
			searchedResults.push(user);
		}
	})
	domUpdates.displaySearchResults(searchedResults, today, destinations);
}

function findInputs(event, destinations) {
	event.preventDefault();
	const chosenDest = document.querySelector('.chosen-destination').value;
	const destID = destinations.find(dest => dest.destination === chosenDest).id;
	const travelerInput = Number(document.querySelector('.traveler-input').value);
	const chosenDate = document.querySelector('.date-picker').value;
	const durationInput = Number(document.querySelector('.duration-input').value);
	submitRequest(destID, travelerInput, chosenDate, durationInput);
}

function clickHandler(trips, destinations, allUsers) {
	if (event.target.className === 'information') {
		domUpdates.displayTripInfo(trips, destinations, allUsers);
	} else if (event.target.id === 'exit-btn') {
		domUpdates.closeTripInfo();
	}
	if (event.target.className === 'approve-btn') {
		const tripID = Number(event.target.closest('.trip-card').id);
		changeTripStatus(tripID);
	}

	// split event target classname into an array on empty spaces
	// check with .includes for the string your looking for
	// .split(' ')
	if (event.target.className === 'approve-btn search-view') {
		const tripID = Number(event.target.closest('.trip-card').id);
		const userContainer = Number(event.target.closest('.searched-user-container').id);
		changeTripStatus(tripID, userContainer, event);
	}
	if (event.target.className === 'deny-btn') {
		const tripID = Number(event.target.closest('.trip-card').id);
		deleteTrip(tripID);
	}
	if (event.target.className === 'deny-btn search-view') {
		console.log('click');
		const tripID = Number(event.target.closest('.trip-card').id);
		const userContainer = Number(event.target.closest('.searched-user-container').id);
		changeTripStatus(tripID, userContainer, event);
	}
	if (event.target.className === 'delete-btn') {
		const tripID = Number(event.target.closest('.trip-card').id);
		const userContainer = Number(event.target.closest('.searched-user-container').id);
		deleteTrip(tripID, userContainer, event);
	}
}

function changeTripStatus(tripID, event) {
	fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/updateTrip', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			id: tripID,
			status: 'approved',
		})
	})
		.then(response => response.json())
		.then(data => console.log(data))
		.catch(error => console.log(error))
		.then(() => updateTripData(event))
}

function deleteTrip(tripID, foundUserContainer) {
	fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips', {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			id: tripID,
		})
	})
		.then(response => response.json())
		.then(data => console.log(data))
		.catch(error => console.log(error))
		.then(() => updateTripData(foundUserContainer))
}

function submitRequest(destID, travelerInput, chosenDate, durationInput) {
	fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			id: Date.now(),
			userID: user.id,
			destinationID: destID,
			travelers: travelerInput,
			date: chosenDate,
			duration: durationInput,
			status: 'pending',
			suggestedActivities: []
		})
	})
		.then(response => response.json())
		.then(data => console.log(data))
		.catch(error => console.log(error))
		.then(() => updatePending(destinations, destID, durationInput, travelerInput));
}

function updatePending(destinations, destID, durationInput, travelerInput) {
	const tripCost = user.findTripCost(destinations, destID, durationInput, travelerInput);
	document.querySelector('.estimated-cost').innerText = `Estimated cost: ${tripCost}`;
	updateTripData();
}

function updateTripData(foundUserContainer, event) {
	trips = fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips')
		.then(response => response.json())
		.catch(error => console.log(error))
	
	return Promise.resolve(trips)
		.then(response => {
			trips = response.trips;
			if (user !== undefined) {
				user = new Traveler(allUsers[usernameID - 1], 'traveler', 'travel2020', trips);
				user.findPendingTrips();
				document.querySelector('.pending-trips-container').innerHTML = '';
				domUpdates.displayUserInfo(user, destinations, today);
			} else if (agentDash.className === 'agent-dash hide') {
				const foundUser = new Traveler(allUsers[foundUserContainer - 1], undefined, undefined, trips);
				console.log(foundUser)
				console.log(foundUser.trips)
				foundUser.findPendingTrips();
				foundUser.findUpcomingTrips(today);
				document.getElementById(foundUserContainer).innerHTML = '';
				domUpdates.displayAdminChange(foundUser, today, destinations);
			} else {
				console.log(agent.pendingTrips);
				agent = new Agent('agency', 'travel2020', trips);
				agent.findPendingTrips();
				agent.findUpcomingTrips(today);
				document.querySelector('.request-container').innerHTML = '';
				domUpdates.displayAgentInfo(agent, destinations, today);
			}
		})
}

function fetchDate() {
	const currentDate = new Date();
  const dd = String(currentDate.getDate()).padStart(2, '0');
  const mm = String(currentDate.getMonth() + 1).padStart(2, '0');
  const yyyy = currentDate.getFullYear();
	today = yyyy + '/' + mm + '/' + dd;
	document.querySelector('.today').innerText = `today: ${today}`;
}

function fetchLoginUser(event) {
  event.preventDefault();
  const loginUser = usernameInput.value;
  const loginPwd = pwdInput.value;

  allUsers = fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers')
    .then(response => response.json())
    .catch(err => console.log('Alert, something\'s wrong with your endpoint!', err.message));

  trips = fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips')
    .then(response => response.json())
    .catch(err => console.log('Alert, something\'s wrong with your endpoint!', err.message));

  destinations = fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations')
    .then(response => response.json())
    .catch(err => console.log('Alert, something\'s wrong with your endpoint!', err.message));

  return Promise.all([allUsers, trips, destinations])
    .then(response => {
			destinations = response[2].destinations;
			trips = response[1].trips;
      allUsers = response[0].travelers.map(traveler => new Traveler(traveler, undefined, undefined, trips));
    })
    .then(() => loginHandler(loginUser, loginPwd))
    .catch(error => console.log(error))
}

function loginHandler(loginUser, loginPwd) {
  const login = new User(loginUser, loginPwd);
  login.authenticate();
	
  if (login.authenticated === true && login.agency === true) {
		agent = new Agent(loginUser, loginPwd, trips);
		agent.findPendingTrips();
		agent.findActiveTrips(today);
    domUpdates.displayAgentDash(agent, destinations, today);
  } else if (login.authenticated === true && login.agency === false) {
		if (isNaN(Number(loginUser.slice(-2)))) {
			usernameID = '0' + loginUser.slice(-1);
		} else {
			usernameID = loginUser.slice(-2);
		}
    user = new Traveler(allUsers[usernameID - 1], loginUser, loginPwd, trips);
		user.findActiveTrips(today);
		user.findUpcomingTrips(today);
		user.findPastTrips(today);
		user.findPendingTrips();
		domUpdates.displayUserDash(user, destinations, today);
  } else {
		domUpdates.displayErrorLoginMsg();
	}
}