import { expect } from 'chai';

import Traveler from '../src/traveler';
import User from '../src/user';
import destinations from './destinations-data';

describe('Traveler', () => {
	let user;
	let felice = {
		"id": 19,
		"name": "Felicdad Rishbrook",
		"travelerType": "thrill-seeker"
	};
	let today;
	let trips;

	beforeEach(() => {
		today = '2019/12/22';
		trips = [{
			"id": 14,
			"userID": 19,
			"destinationID": 35,
			"travelers": 1,
			"date": "2020/09/24",
			"duration": 10,
			"status": "approved",
			"suggestedActivities": []
			}, {
			"id": 16,
			"userID": 19,
			"destinationID": 27,
			"travelers": 1,
			"date": "2019/11/20",
			"duration": 9,
			"status": "approved",
			"suggestedActivities": []
			}, {
			"id": 62,
			"userID": 19,
			"destinationID": 37,
			"travelers": 4,
			"date": "2020/08/07",
			"duration": 8,
			"status": "approved",
			"suggestedActivities": []
			}, {
			"id": 125,
			"userID": 19,
			"destinationID": 2,
			"travelers": 4,
			"date": "2019/12/22",
			"duration": 15,
			"status": "approved",
			"suggestedActivities": []
			},
			{
			"id": 124,
			"userID": 46,
			"destinationID": 3,
			"travelers": 6,
			"date": "2019/10/07",
			"duration": 16,
			"status": "approved",
			"suggestedActivities": []
			}, {
			"id": 150,
			"userID": 19,
			"destinationID": 37,
			"travelers": 2,
			"date": "2020/09/15",
			"duration": 8,
			"status": "pending",
			"suggestedActivities": []
		}]
		user = new Traveler(felice, 'traveler19', 'travel2020', trips);
	})

	it('is a function', () => {
		expect(Traveler).to.be.a('function');
	})

	it('should be an instance of Traveler', () => {
		expect(user).to.be.an.instanceof(Traveler);
	})

	it('should be an instance of User', () => {
		expect(user).to.be.an.instanceof(User);
	})

	//property tests

	it('should be able to find all trips active for a given day', () => {
		user.findActiveTrips(today);
		
		expect(user.activeTrips).to.deep.equal([{
			"date": "2019/12/22", "destinationID": 2, 
			"duration": 15, "id": 125, "status": "approved", 
			"suggestedActivities": [], "travelers": 4,
			"userID": 19
    }]);
	})

	it('should be able to find all upcoming trips based on todays date', () => {
		user.findUpcomingTrips('2020/08/08');

		expect(user.upcomingTrips).to.deep.equal([trips[0]]);
	})

	it('should be able to find all past trips based on todays date', () => {
		user.findPastTrips('2020/08/08');

		expect(user.pastTrips).to.deep.equal([trips[1], trips[2], trips[3]]);
	})

	it('should be able to find all trips pending approval', () => {
		user.findPendingTrips();

		expect(user.pendingTrips).to.deep.equal([trips[5]]);
	})

	it('should be able to find the years trip expenses based off the date', () => {
		expect(user.findYearTripCost('2020/09/24', destinations)).to.equal('$22660');
	})
})