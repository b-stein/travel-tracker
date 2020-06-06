import { expect } from 'chai';

import Agent from '../src/agent';
import User from '../src/user';
import destinations from './destinations-data';

describe('Agent', () => {
	let agent;
	let today;
	let trips;

	beforeEach(() => {
		today = '2019/12/22';
		trips = [{
			"id": 2,
			"userID": 35,
			"destinationID": 25,
			"travelers": 5,
			"date": "2020/10/04",
			"duration": 18,
			"status": "pending",
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
			"id": 22,
			"userID": 22,
			"destinationID": 9,
			"travelers": 4,
			"date": "2020/05/01",
			"duration": 19,
			"status": "pending",
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
		agent = new Agent('agency', 'travel2020', trips);
	})

	it('is a function', () => {
		expect(Agent).to.be.a('function');
	})

	it('should be an instance of Traveler', () => {
		expect(agent).to.be.an.instanceof(Agent);
	})

	it('should be an instance of User', () => {
		expect(agent).to.be.an.instanceof(User);
	})

	it('should have a default id property of 1', () => {
		expect(agent.id).to.equal(1);
	})

	it('should hold all users trips as a property', () => {
		expect(agent.userTrips).to.equal(trips);
	})

	it('if instantiated while missing an argument, userTrips property will be undefined', () => {
		const badAgent = new Agent('agency', 'travel2020');

		expect(badAgent.userTrips).to.equal(undefined);
	})

	it('findPendingTrips method should find all pending trips', () => {
		agent.findPendingTrips();

		expect(agent.pendingTrips).to.deep.equal([trips[0], trips[3], trips[5]]);
	})

	it('if findPendingTrips method is invoked with an argument, the method will still run properly', () => {
		agent.findPendingTrips(today);

		expect(agent.pendingTrips).to.deep.equal([trips[0], trips[3], trips[5]]);
	})

	it('findYearRevenue method should return the 10% gained by the agency for the calendar year', () => {
		expect(agent.findYearRevenue(today, destinations)).to.equal('$795.75');
	})

	it('if findYearRevenue is invoked with a missing arugment, an error should throw', () => {
		expect(() => {agent.findYearRevenue(today)}).to.throw(Error);
	})

	it('findActiveTrips method should find all trips active today', () => {
		agent.findActiveTrips("2020/09/15");

		expect(agent.activeTrips).to.deep.equal([trips[5]]);
	})

	it('if findActiveTrips method is invoked without an argument, it will return nothing', () => {
		agent.findActiveTrips();

		expect(agent.activeTrips).to.deep.equal([]);
	})
})