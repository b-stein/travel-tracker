import { expect } from 'chai';

import Traveler from '../src/traveler';
import User from '../src/user';
import destinations from './destinations-data';
import trips from './trips';

describe('Traveler', () => {
	let user;
	let felice = {
		"id": 19,
		"name": "Felicdad Rishbrook",
		"travelerType": "thrill-seeker"
	};
	let today;

	beforeEach(() => {
		today = '2019/12/22';
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

	it('should have the users id property', () => {
		expect(user.id).to.equal(19);
	})

	it('should have the users name property', () => {
		expect(user.name).to.equal('Felicdad Rishbrook');
	})

	it('should have the users travelerType property', () => {
		expect(user.travelerType).to.equal('thrill-seeker');
	})

	it('should hold all trips matching the users id', () => {
		expect(user.trips).to.deep.equal([trips[1], trips[2], trips[5], trips[6]]);
	})

	it('if instantiated while missing an argument, an error should throw', () => {
		expect(() => {new Traveler(trips, 'traveler19', 'travel2020')}).to.throw(Error);
	})

	it('should be able to find all trips active for a given day', () => {
		user.findActiveTrips(today);
		
		expect(user.activeTrips).to.deep.equal([{
			"date": "2019/12/22", "destinationID": 2, 
			"duration": 15, "id": 125, "status": "approved", 
			"suggestedActivities": [], "travelers": 4,
			"userID": 19
    }]);
	})

	it('if findActiveTrips method is invoked without an argument, it will return nothing', () => {
		user.findActiveTrips();

		expect(user.activeTrips).to.deep.equal([]);
	})

	it('should be able to find all upcoming trips based on todays date', () => {
		user.findUpcomingTrips('2019/12/18');

		expect(user.upcomingTrips).to.deep.equal([trips[2], trips[6]]);
	})

	it('if findUpcomingTrips method is invoked without an argument, it will return nothing', () => {
		user.findUpcomingTrips();

		expect(user.upcomingTrips).to.deep.equal([]);
	})

	it('should be able to find all past trips based on todays date', () => {
		user.findActiveTrips('2020/01/19')
		user.findPastTrips('2020/01/19');

		expect(user.pastTrips).to.deep.equal([trips[1], trips[6]]);
	})

	it('if findPastTrips method is invoked without an argument, it will return nothing', () => {
		user.findPastTrips();

		expect(user.pastTrips).to.deep.equal([]);
	})

	it('should be able to find all trips pending approval', () => {
		user.findPendingTrips();

		expect(user.pendingTrips).to.deep.equal([trips[5]]);
	})

	it('if findPendingTrips method is invoked with an argument, the method will still run properly', () => {
		user.findPendingTrips(today);

		expect(user.pendingTrips).to.deep.equal([trips[5]]);
	})

	it('should be able to find the years trip expenses based off the date', () => {
		expect(user.findYearTripCost('2020/09/24', destinations)).to.equal('$10340');
	})

	it('if findYearTripCost method is invoked while missing an argument, an error should throw', () => {
		expect(() => {user.findYearTripCost('2020/09/24')}).to.throw(Error);
	})
})