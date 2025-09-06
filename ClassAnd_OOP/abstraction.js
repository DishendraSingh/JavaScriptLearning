class Vehicle {
  constructor(type) {
    this.type = type;
  }

  // Abstracted method: we don't show *how* it works internally
  startEngine() {
    console.log(`${this.type} engine started...`);
  }

  stopEngine() {
    console.log(`${this.type} engine stopped.`);
  }
}


// Usage
const car = new Vehicle("Car");
car.startEngine(); // Car engine started...
car.stopEngine();  // Car engine stopped.
