let store = [drivers: [], passengers: [], trips:[]];

let driverID = 0;
let passengerID = 0;
let tripID = 0;

class Driver{
  constructor(name){
    this.name = name;
    this.id = driverID++;
  }
  
  trips(){
  }
  
  passengers(){
  }
}

class Passenger{
  constructor(name){
    this.name = name;
    this.id = passengerID++;
  }
  
  trips(){
  }
  
  drivers(){
  }
}

class Trip{
  constructor(driver, passenger){
    this.driver = driver;
    this.passenger = passenger;
  }
  
  driver(){
  }
}

