import User from './user';

class Traveler extends User {
	constructor(data, username = undefined, pwd = undefined, trips) {
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

	//updates trips method?

	findActiveTrips(today) {
		const activeTrips = this.trips.filter(trip => {
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

	findUpcomingTrips(today) {
		const upcomingTrips = this.trips.filter(trip => trip.date > today);

		this.upcomingTrips = upcomingTrips.filter(trip => trip.status === 'approved');
	}

	findPastTrips(today) {
		this.pastTrips = this.trips.filter(trip => trip.date < today).filter(trip => trip.status === 'approved');
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

		const totalCost = yearTrips.reduce((sum, trip) => {
			const foundTripSpec = destinations.find(spot => spot.id === trip.destinationID);
			let tripCost = (foundTripSpec.estimatedFlightCostPerPerson * trip.travelers) 
				+ (foundTripSpec.estimatedLodgingCostPerDay * trip.duration);
			tripCost += (tripCost / 10);
			sum += tripCost;

			return sum;
		}, 0);

		return `$${totalCost}`;
	}

	findTripCost(destinations, destID, durationInput, travelerInput) {
		const foundTrip = destinations.find(spot => spot.id === destID);
		const cost = (foundTrip.estimatedLodgingCostPerDay * durationInput) + (foundTrip.estimatedFlightCostPerPerson * travelerInput)
		const totalCost = cost + (cost / 10);
		return `$${totalCost}`;
	}
}

export default Traveler;