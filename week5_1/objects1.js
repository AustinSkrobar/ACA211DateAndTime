'use strict'

let mine = {
    color : "blue",
    mpg: 23,
    year: 2007,
    make: "mazda",
    model:"mazda 3",
    win: "1234567"
}

class Car {
    color;
    make;
    model;

    constructor(){
        console.log("In the car constructor");
        this.vin = Math.random();
        this.color = "white"
    }
}

let car1 = new Car();
car1.color = "blue";
car1.make = "mazda";
car1.model = "mazda3";
let car2 = new Car();