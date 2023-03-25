/* eslint-disable no-underscore-dangle */

export default class Building {
  constructor(sqft) {
    this._sqft = typeof sqft === 'number' ? sqft : 0;
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }
}
