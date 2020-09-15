"use strict";

const assert = require("assert");

//Vehicles and Crew

let mapping = {
  Plane: "Pilot",
  Boat: "Captain",
  Bus: "Bus Driver",
  Train: "Conductor",
};

class Vehicle {
  type; //this is the type of vehicle
  startDate; //this is the date the vehicle was put in service
  id; //this is the id of the vehicle in our fleet
  capacity; // this is the guest capacity of the vehicle
  crew; //holds a collection of employees on the vehicle

  constructor(id, type, startDate, capacity) {
    this.id = id;
    this.type = type;
    this.startDate = startDate;
    this.capacity = capacity;
    this.crew = [];
  }

  //if there is at least 1 crew on board that can pilot this vehicle then
  //return "Good to Go!"
  //else return "Not ready yet."
  status() {
    //does the employee job match the vehicle type
    //for everyone that is on board
    //check their job title to match the type of vehicle
    //if you found one return ready to go
    //otherwise check the next person

    //if we run out of people to check
    //return not ready
    let reqiuredJob = mapping[this.type];
    console.log("The required job is ", reqiuredJob);

    //if you want to do it with a higher order function.

    //     for(let i=0; i<this.crew.length; i++){
    //         let member = this.crew[i]
    //         if(member.job == reqiuredJob){
    //             return "Good to Go!"
    //         }
    //     }
    //     return "Not Ready Yet!"
    //     if (Employee.job == Vehicle.type)
    //         console.log("Ready to go!")
    //         return true
    //     } else{
    //         console.log("Not ready yet!")
    //         return false
    //     }

    //if you want to do it with a higer order function
    let found = this.crew.find(function (member) {
      if (member.job == reqiuredJob) {
        return true;
      } else {
        return false;
      }
    });

    if (found) {
      return "Good to Go! " + found.name + " is on board!";
    } else {
      return "Not ready yet!";
    }
  }
}

class Employee {
  job;
  name;
  id;
  vehicle; // if is not null, that means the employee is currently assigned to
  //that vehicle

  constructor(id, name, job) {
    this.id = id;
    this.name = name;
    this.job = job;
    this.vehicle = null;
  }

  assingTo(theVehicle) {
    //we never told it to remove the crew memeber from the previous vehicle once they were reassigned

    if (this.vehicle == null) {
      //not assigned, feel free to assign them
    } else {
      console.log("need to unassign " + this.name + " from old vehicle " + this.vehicle.id);
      //they are already assigned so need to remove them first

      //this is to create a new array with the memeber removed and shows the new array with the member removed
    //     let lookingFor = this;
    //     let newCrew = this.crew.filter(function (member) {
    //       if (member == lookingFor) {
    //         return false;
    //       }
    //       return true;
    //     });
    //   this.vehicle.crew = newCrew;

      //this is to only remove the crew memeber from the existing array.
      //does not create a new array
      let lookingFor = this;
      let index = this.vehicle.crew.findIndex(function (member) {
        // console.log("looking at ", member);
        // console.log("lookingFor: ", lookingFor);
        if (lookingFor == member) {
          return true;
        }
        return false;
      });
      console.log("found the index of the crew member", index);

      if (index >= 0) {
        this.vehicle.crew.splice(index, 1);
      }
     
    }

    this.vehicle = theVehicle;
    theVehicle.crew.push(this);
  }
}

if (typeof describe === "function") {
  const assert = require("assert");

  describe(" Set #1", function () {
    it("Should correctly create vehicles", function () {
      let titanic = new Vehicle("doomed", "Boat", "1812", 2220);
      let jet1 = new Vehicle("sonic", "Plane", "2020", 5);

      assert.equal(titanic.id, "doomed");
      assert.equal(titanic.capacity, 2220);
      assert.equal(titanic.type, "Boat");
    });

    it("Should create an employee correctly", function () {
      let frank = new Employee(1, "Frank Underwood", "Bus Driver");
      assert.equal(frank.name, "Frank Underwood");
      assert.equal(frank.id, 1);
      assert.equal(frank.job, "Bus Driver");
    });
  });

  describe("Set # 2", function () {
    it("should correctly add a assign employee to vehicle", function () {
      let titanic = new Vehicle("doomed", "Boat", "1812", 2220);
      let frank = new Employee(1, "Frank Underwood", "Bus Driver");
      assert.equal(titanic.crew.length, 0);
      assert.equal(frank.vehicle, null);
      frank.assingTo(titanic);
      assert.equal(titanic.crew.length, 1);
      assert.equal(frank.vehicle, titanic);
    });
  });

  describe("Set # 3", function () {
    it("should correctly assign employee to vehicle if they get reassigned", function () {
      let titanic = new Vehicle("doomed", "Boat", "1812", 2220);
      let jet1 = new Vehicle("sonic", "Plane", "2020", 5);
      let frank = new Employee(1, "Frank Underwood", "Bus Driver");

      assert.equal(titanic.crew.length, 0);
      assert.equal(jet1.crew.length, 0);
      assert.equal(frank.vehicle, null);

      frank.assingTo(titanic);
      frank.assingTo(jet1);

      assert.equal(titanic.crew.length, 0);
      assert.equal(jet1.crew.length, 1);
    });

    it("should correctly return the status", function () {
      let titanic = new Vehicle("doomed", "Boat", "1812", 2220);
      let jet1 = new Vehicle("sonic", "Plane", "2020", 5);
      let frank = new Employee(1, "Frank Underwood", "Bus Driver");
      let megan = new Employee(2, "Megan Smith", "Pilot");

      assert.equal(titanic.crew.length, 0);
      assert.equal(jet1.crew.length, 0);
      assert.equal(frank.vehicle, null);
      assert.equal(megan.vehicle, null);

      assert.equal(titanic.status(), "Not ready yet!");
      assert.equal(jet1.status(), "Not ready yet!");

      frank.assingTo(titanic);
      megan.assingTo(jet1);
      frank.assingTo(jet1)

      assert.equal(titanic.status(), "Not ready yet!");
      assert.equal(jet1.status(), "Good to Go! Megan Smith is on board!");

      assert.equal(titanic.crew.length, 0);
      assert.equal(jet1.crew.length, 2);
    });
  });
}

// let titanic = new Vehicle("doomed", "Boat", "1812", 2220);
// let jet1 = new Vehicle("sonic", "Plane", "2020", 5);
// let thomas = new Vehicle("1", "Train", "2020", 2);

// let frank = new Employee(1, "Frank Underwood", "Bus Driver");
// let megan = new Employee(2, "Megan Smith", "Pilot");
// let mark = new Employee(2, "Mark Doe", "Assistant");
// let mary = new Employee(2, "Mary Dole", "Assistant");

// console.log("Before assignments");
// console.log(jet1.status());

// mary.assingTo(titanic);
// mark.assingTo(jet1);
// megan.assingTo(jet1);
// frank.assingTo(titanic);

// console.log("After assignments");
// console.log(jet1.status());
