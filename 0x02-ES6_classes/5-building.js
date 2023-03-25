/* eslint-disable no-underscore-dangle */

export default class Building {
  constructor(sqft) {
    this._sqft = typeof sqft === 'number' ? sqft : 0;
  }

  get sqft() {
    return this._sqft;
  }

  // this is an abstract method that must be implemented by subclasses
  evacuationWarningMessage() {
    if (this instanceof Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
