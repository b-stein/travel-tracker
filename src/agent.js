import User from './user';

class Agent extends User {
	constructor(username, pwd, trips) {
		super(username, pwd, true, true);
		this.id = 1;
		this.userTrips = trips;
		this.pendingTrips = [];
		this.upcomingTrips = [];
		this.activeTrips = [];
	}

	updateProperties(today, trips) {
		this.userTrips = trips;
		this.findPendingTrips();
		this.findActiveTrips(today);
	}

	findPendingTrips() {
		this.pendingTrips = this.userTrips.filter(trip => trip.status === 'pending');
	}

	findUpcomingTrips(today) {
		const upcomingTrips = this.userTrips.filter(trip => trip.date > today);

		this.upcomingTrips = upcomingTrips.filter(trip => trip.status === 'approved');
	}
	
	findYearRevenue(today, destinations) {
		const yyyy = today.substring(0, 4);

		const yearTrips = this.userTrips.filter(trip => {
			let tYYYY = trip.date.substring(0, 4);
			if (tYYYY === yyyy) return trip;
		})

		const confirmedYrTrips = yearTrips.filter(trip => trip.status === 'approved');

		const incomeMade = (confirmedYrTrips.reduce((sum, trip) => {
			const foundTripSpec = destinations.find(spot => spot.id === trip.destinationID);
			let tripCost = (foundTripSpec.estimatedFlightCostPerPerson * trip.travelers) 
				+ (foundTripSpec.estimatedLodgingCostPerDay * trip.duration);
			sum += tripCost;

			return sum;
		}, 0) * .1).toFixed(2);

		return `$${incomeMade}`;
	}


	findActiveTrips(today) {
		const activeTrips = this.userTrips.filter(trip => {
			const endDate = this.addDays(trip.date, trip.duration);
			if (endDate > today && trip.date <= today) return trip
		})

		this.activeTrips = activeTrips.filter(trip => trip.status === 'approved');
	}

	addDays(date, days) {
		const endDate = new Date(date);
		endDate.setDate(endDate.getDate() + days);
		const dd = String(endDate.getDate()).padStart(2, '0');
  	const mm = String(endDate.getMonth() + 1).padStart(2, '0');
  	const yyyy = endDate.getFullYear();
		return yyyy + '/' + mm + '/' + dd;
	}
}

export default Agent;