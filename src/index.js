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

let today;
let user;
let allUsers;
let agent;
let trips;
let destinations;

window.addEventListener('load', fetchDate);
document.querySelector('.login-btn').addEventListener('click', (e) => fetchLoginUser(e));

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
      allUsers = response[0].travelers;
      trips = response[1].trips;
      destinations = response[2].destinations;
    })
    .then(() => loginHandler(loginUser, loginPwd))
    .catch(domUpdates.displayErrorLoginMsg())
}

function loginHandler(loginUser, loginPwd) {
  const login = new User(loginUser, loginPwd);
  login.authenticate();
	
  if (login.authenticated === true && login.agency === true) {
		agent = new Agent(loginUser, loginPwd, trips);
		agent.findPendingTrips();
		agent.findActiveTrips(today);
    domUpdates.displayAgentDash(agent, destinations, today);
    console.log(agent);
  } else if (login.authenticated === true && login.agency === false) {
		let usernameID;
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
    console.log(user);
  } else {
		domUpdates.displayErrorLoginMsg();
	}
}