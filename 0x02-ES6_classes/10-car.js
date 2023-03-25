/* eslint-disable no-underscore-dangle */
const CLONE = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  [CLONE]() {
    return new this.constructor();
  }

  cloneCar() {
    return this[CLONE]();
  }
}
