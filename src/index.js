import './images/search.png';
import './images/map.png';
import './images/bahamas.jpg';
import './css/base.scss';

import Traveler from './traveler';
import Agent from './agent';
import User from './user';
import domUpdates from './domUpdates';
import FetchCall from './fetchCall';

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
let fetchCall;

window.addEventListener('load', fetchDate);
document.querySelector('.login-btn').addEventListener('click', () => fetchLoginUser(event));
document.querySelector('.book-trip').addEventListener('click', domUpdates.displayReqForm);
document.getElementById('exit-form-btn').addEventListener('click', domUpdates.exitForm);
document.querySelector('.btn-warning').addEventListener('click', () => findInputs(event, destinations));
document.querySelector('.clear-form').addEventListener('click', () => domUpdates.clearForm(event));
document.querySelector('main').addEventListener('click', () => clickHandler(trips, destinations, allUsers));
document.querySelector('.search-btn').addEventListener('click', () => searchUsers(event));
document.getElementById('search').addEventListener('submit', () => searchUsers(event));
document.querySelector('.back-btn').addEventListener('click', () => domUpdates.displayAgentDash(agent, destinations, today));

function fetchDate() {
	const currentDate = new Date();
  const dd = String(currentDate.getDate()).padStart(2, '0');
  const mm = String(currentDate.getMonth() + 1).padStart(2, '0');
  const yyyy = currentDate.getFullYear();
	today = yyyy + '/' + mm + '/' + dd;
	document.querySelector('.today').innerText = `today: ${today}`;
	fetchCall = new FetchCall();
}

function fetchLoginUser(event) {
  event.preventDefault();
  const loginUser = usernameInput.value;
	const loginPwd = pwdInput.value;
	
	allUsers = fetchCall.getTravelers();
	trips = fetchCall.getTrips();
	destinations = fetchCall.getDestinations();

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
	
  if (login.authenticated === true && login.agency) {
		agent = new Agent(loginUser, loginPwd, trips);
		agent.updateProperties(today, trips);
    domUpdates.displayAgentDash(agent, destinations, today);
  } else if (login.authenticated === true && !login.agency) {
		if (isNaN(Number(loginUser.slice(-2)))) {
			usernameID = '0' + loginUser.slice(-1);
		} else { usernameID = loginUser.slice(-2) }
    user = new Traveler(allUsers[usernameID - 1], loginUser, loginPwd, trips);
		user.updateAllProperties(today);
		domUpdates.displayUserDash(user, destinations, today);
  } else { domUpdates.displayErrorLoginMsg() }
}

function clickHandler(trips, destinations, allUsers) {
	if (event.target.className === 'information') {
		domUpdates.displayTripInfo(trips, destinations, allUsers);
	} else if (event.target.id === 'exit-btn') {
		domUpdates.closeTripInfo();
	}
	if (event.target.className === 'approve-btn') {
		const tripUpdate = {
			id: Number(event.target.closest('.trip-card').id),
			status: 'approved',
		};
		changeTripStatus(tripUpdate);
	}
	if (event.target.className === 'approve-btn search-view') {
		const foundUserID = Number(event.target.closest('.searched-user-container').id);
		const tripUpdate = {
			id: Number(event.target.closest('.trip-card').id),
			status: 'approved',
		};
		changeTripStatus(tripUpdate, foundUserID);
	}
	if (event.target.className === 'deny-btn') {
		const foundTrip = { id: Number(event.target.closest('.trip-card').id) }
		deleteTrip(foundTrip);
	}
	if (event.target.className === 'deny-btn search-view') {
		const foundUserID = Number(event.target.closest('.searched-user-container').id);
		const foundTrip = { id: Number(event.target.closest('.trip-card').id) }
		deleteTrip(foundTrip, foundUserID);
	}
	if (event.target.className === 'delete-btn') {
		const foundUserID = Number(event.target.closest('.searched-user-container').id);
		const foundTrip = { id: Number(event.target.closest('.trip-card').id) }
		deleteTrip(foundTrip, foundUserID);
	}
}

function findInputs(event, destinations) {
	event.preventDefault();
	const chosenDest = document.querySelector('.chosen-destination').value;
	const tripRequest = {
		id: Date.now(),
		userID: user.id,
		destinationID: destinations.find(dest => dest.destination === chosenDest).id,
		travelers: Number(document.querySelector('.traveler-input').value),
		date: document.querySelector('.date-picker').value,
		duration: Number(document.querySelector('.duration-input').value),
		status: 'pending',
		suggestedActivities: []
	}
	submitRequest(tripRequest);
}

function changeTripStatus(givenTrip, foundUserID) {
	fetchCall.approveTrip(givenTrip)
		.then(() => updateTripData(foundUserID))
}

function deleteTrip(givenTrip, foundUserID) {
	fetchCall.deleteTrip(givenTrip)
		.then(() => updateTripData(foundUserID))
}

function submitRequest(givenTrip) {
	fetchCall.postBookingRequest(givenTrip)
		.then(() => updatePending(destinations, givenTrip));
}

function updatePending(destinations, givenTrip) {
	const tripCost = user.findTripCost(destinations, givenTrip.destinationID, givenTrip.duration, givenTrip.travelers);
	document.querySelector('.estimated-cost').innerText = `Estimated cost: ${tripCost}`;
	updateTripData();
}

function updateTripData(foundUserID) {
	trips = fetchCall.getTrips()
	
	return Promise.resolve(trips)	
		.then(response => {
			trips = response.trips;
			if (user !== undefined) {
				user = new Traveler(allUsers[usernameID - 1], 'traveler', 'travel2020', trips);
				user.findPendingTrips();
				document.querySelector('.pending-trips-container').innerHTML = '';
				domUpdates.displayUserInfo(user, destinations, today);
			} else if (agentDash.className === 'agent-dash hide') {
				const foundUser = new Traveler(allUsers[foundUserID - 1], undefined, undefined, trips);
				foundUser.updateAllProperties(today);
				agent.updateProperties(today, trips);
				document.getElementById(foundUserID).innerHTML = '';
				domUpdates.displayAdminChange(foundUser, today, destinations);
			} else {
				agent.updateProperties(today, trips);
				document.querySelector('.revenue').innerText = '';
				document.querySelector('.request-container').innerHTML = '';
				domUpdates.displayAgentInfo(agent, destinations, today);
			}
		})
}

function searchUsers(event) {
	event.preventDefault();
	const search = document.getElementById('search-input').value.toLowerCase();
	const searchedResults = []
	allUsers.forEach(user => {
		if (user.name.toLowerCase().includes(search)) {
			user.findActiveTrips(today);
			user.findUpcomingTrips(today);
			user.findPastTrips(today);
			user.findPendingTrips();
			searchedResults.push(user);
		}
	})
	document.querySelector('.search-results-container').innerHTML = '';
	domUpdates.displaySearchResults(searchedResults, today, destinations);
}