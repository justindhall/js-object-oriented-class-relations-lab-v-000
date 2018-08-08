let store = {drivers: [], passengers: [], trips:[]};

let driverID = 0;
let passengerID = 0;
let tripID = 0;


class Driver {
  constructor(name) {
    this.name = name;
    this.id = driverID++;
    store.drivers.push(this);
  }
  trips() {
    return store.trips.filter(trip => {
      return trip.driverID == this.id;
    });
  }
  passengers() {
    return this.trips().map(trip => {
      return trip.passenger();
    });
  }
}

class Passenger {
  constructor(name) {
    this.name = name;
    this.id = passengerID++;
    store.passengers.push(this);
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.passengerID == this.id;
    });
  }
  drivers() {
    return this.trips().map(trip => {
      return trip.driver();
    });
  }
}

class Trip {
  constructor(driver, passenger) {
    this.driverID = driver.id;
    this.passengerID = passenger.id;
    this.id = tripID++;
    store.trips.push(this);
  }
  driver() {
    return store.drivers.find(driver => {
      return driver.id === this.driverID;
    });
  }
  passenger() {
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerID;
    });
  }
}