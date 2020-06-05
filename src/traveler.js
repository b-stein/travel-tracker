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
//find length of trip too ^^

	findUpcomingTrips(today) {
		const yyyy = today.substring(0, 4);
		const mm = today.substring(6, 8);
		const dd = today.substring(9);

		this.upcomingTrips = this.trips.filter(trip => {
			let tYYYY = trip.date.substring(0, 4);
			let tMM = trip.date.substring(6, 8);
			let tDD = trip.date.substring(9);
			if (tYYYY > yyyy || 
				tYYYY === yyyy && tMM > mm || 
				tYYYY === yyyy && tMM === mm && tDD > dd) {
				return trip;
			}
		})
	}

	findPastTrips(today) {
		const yyyy = today.substring(0, 4);
		const mm = today.substring(6, 8);
		const dd = today.substring(9);

		this.pastTrips = this.trips.filter(trip => {
			let tYYYY = trip.date.substring(0, 4);
			let tMM = trip.date.substring(6, 8);
			let tDD = trip.date.substring(9);
			if (tYYYY < yyyy || 
				tYYYY === yyyy && tMM < mm || 
				tYYYY === yyyy && tMM === mm && tDD < dd) {
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