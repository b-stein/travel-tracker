import User from './user';

class Traveler extends User {
	constructor(data, username, pwd, trips) {
		super(username, pwd, true);
		this.id = data.id;
		this.name = data.name;
		this.travelerType = data.travelerType;
		this.trips = trips.filter(trip => trip.userID === this.id);
		this.activeTrips = [];
		this.upcomingTrips = [];
		this.pastTrips = [];
		this.pendingTrips = [];
	}

	findActiveTrips(today) {
		this.activeTrips = this.trips.filter(trip => trip.date === today);
	}

//find array of trip date - duration
//check if those arrays include today's date
//assign those to this.activeTrips

	findUpcomingTrips(today) {
		let yyyy = today.substring(0, 4);
		let mm = today.substring(5, 7);
		let dd = today.substring(8);

		const upcomingTrips = this.trips.filter(trip => {
			let tYYYY = trip.date.substring(0, 4);
			let tMM = trip.date.substring(5, 7);
			let tDD = trip.date.substring(8);
			if (tYYYY > yyyy) {
				return trip;
			} else if (tYYYY === yyyy && tMM > mm) {
				return trip;
			} else if (tYYYY === yyyy && tMM === mm && tDD > dd) {
				return trip;
			}
		})

		this.upcomingTrips = upcomingTrips.filter(trip => trip.status === 'approved');
	}

	findPastTrips(today) {
		let yyyy = today.substring(0, 4);
		let mm = today.substring(5, 7);
		let dd = today.substring(8);

		this.pastTrips = this.trips.filter(trip => {
			let tYYYY = trip.date.substring(0, 4);
			let tMM = trip.date.substring(5, 7);
			let tDD = trip.date.substring(8);
			if (tYYYY < yyyy) {
				return trip;
			} else if (tYYYY === yyyy && tMM < mm) {
				return trip;
			} else if (tYYYY === yyyy && tMM === mm && tDD < dd) {
				return trip;
			}
		})
	}

	findPendingTrips() {
		this.pendingTrips = this.trips.filter(trip => trip.status === 'pending');
	}

	findYearTripCost(today, destinations) {
		const yyyy = today.substring(0, 4);

		const yearTrips = this.trips.filter(trip => {
			let tYYYY = trip.date.substring(0, 4);
			if (tYYYY === yyyy) return trip;
		})

		const totalCost = yearTrips.reduce((acc, trip) => {
			const foundTripSpec = destinations.find(spot => spot.id === trip.destinationID);
			let tripCost = (foundTripSpec.estimatedFlightCostPerPerson * trip.travelers) 
				+ (foundTripSpec.estimatedLodgingCostPerDay * trip.duration);
			tripCost += (tripCost / 10);
			acc += tripCost;

			return acc;
		}, 0);

		return `$${totalCost}`;
	}
}

export default Traveler;