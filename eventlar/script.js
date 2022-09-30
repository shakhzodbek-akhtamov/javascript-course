"use strict";

function Car(name, speed) {
    this.name = name;
    this.spees = speed;
    this.property = function () {
        console.log(`${this.name} is very fast car`);
    };
}

Car.prototype.monster = function () {
    console.log(`${this.name} is monster car`);
};

const bmw = new Car("bmw", 320);

console.log(bmw);
