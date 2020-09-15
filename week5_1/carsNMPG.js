"use strict";

class Car {
  // vin;
  // mpg;
  // fuelTankSize;
  // currentFuel;

  constructor(iMpg, iTankSize) {
    this.vin = Math.round(1000000000000000 * Math.random());
    this.mpg = iMpg;
    this.fuelTankSize = iTankSize;
    this.currentFuel = 0;
  }
  //should you allow a negative value?
  //this function currently allows you to "Over fuel"
  addFuel(numGallons) {
    if (this.fuelTankSize < numGallons) {
      console.log("Too much fuel added");
      this.currentFuel = this.fuelTankSize
      return false;
    } else if (numGallons < 0) {
        console.log("there is no more gas in the tank to take")
      this.currentFuel = 0;
      return false;
    } else {
      this.currentFuel += numGallons;
    }
  }
  //this function tell how many miles wwe can travel on the current fuel
  distanceTillEmpty() {
    return this.mpg * this.currentFuel;
  }

  //this function updates the current fuel based on the distance traveled
  //should you be able to travel a negative distance?
  //should you be able to travel past a empty tank?
  //should your tank ever go negative?
  travel(distance) {
    //BUILD THIS FUNCTION OUT
    //let distTravelled = distance * this.mpg
    if (distance > this.distanceTillEmpty()) {
      console.log("You ran out of gas before reaching the destination.");
      this.currentFuel = 0;
      return false;
    } else {
      this.currentFuel -= distance / this.mpg;
    }
  }
}
let car1 = new Car(10, 20);
car1.addFuel(15);
car1.addFuel(2);
console.log(car1);
console.log("Miles till empty:", car1.distanceTillEmpty());
car1.travel(200);
console.log("Miles till empty:", car1.distanceTillEmpty());

const assert = require("assert");

if (typeof describe === "function") {
  describe("test 1", () => {
    it("should allow us to create a car", function () {
      let car1 = new Car(23, 11);
      assert.equal(car1.currentFuel, 0);
    });
    it("should allow us to add fuel", function () {
      let car1 = new Car(23, 11);
      car1.addFuel(10);
      assert.equal(car1.currentFuel, 10);
    });
    it("should compute distance till empty", function(){
        let car1 = new Car(23, 11);
      car1.addFuel(10);
      assert.equal(car1.distanceTillEmpty(), 230)
    })
    it("should not allow over fueling", function () {
      let car1 = new Car(23, 11);
      car1.addFuel(100);
      
      assert.equal(car1.currentFuel, 11);
    });
    it("should not allow siphoning past zero", function () {
      let car1 = new Car(23, 11);
      car1.addFuel(4);
      car1.addFuel(-5);
      
      assert.equal(car1.currentFuel, 0);
    });
    it("should not let you travel fuerther than the amount of fuel you have available.", function () {
      let car1 = new Car(23, 11);
      car1.addFuel(4);
      car1.travel(500);
      assert.equal(car1.currentFuel, 0);
    });
  });
}
