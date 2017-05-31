import * as Settings from './constants/WorldSettings';

export default class World {

  constructor() {
    this.field = [];
    for (let i = 0; i < Settings.FIELD_WIDTH_IN_M * Settings.PIXELS_PER_M * 10; i++) {
      this.field[i] = [];
      this.field[i][Settings.FIELD_HEIGHT_IN_M * Settings.PIXELS_PER_M - 1] = 0;
    }

    this.field[0.1 * Settings.PIXELS_PER_M][0.3 * Settings.PIXELS_PER_M] = 1;
  }

  /**
   * Converts real world coordinates (specified in meters) to pixel world representation.
   *
   * @param x X coord in real world in metres.
   * @param y Y coord in real world in metres.
   */
  convertWorldCoordsToFieldCoords(x, y) {
    x = x * Settings.PIXELS_PER_M;
    y = y * Settings.PIXELS_PER_M;

    if (y >= this.field[0].length || x >= this.field.length) {
      throw new Error('X and Y coordinates are out of the bounds of the world');
    }

    return { x, y }
  }


  /**
   * Returns true if the line can be seen from specified position in the given radius.
   *
   * @param x X coordinate in real world in metres.
   * @param y Y coordinate in real world in metres.
   * @param radius Radius in which to search in metres.
   * @returns {boolean}
   */
  canSeeLine(x, y, radius) {
    let { x: newX, y: newY } = this.convertWorldCoordsToFieldCoords(x, y);
    newX = Math.round(newX);
    newY = Math.round(newY);

    let lineSeen = false;
    for (let i = 0; i <= radius; i++) {
      for (let j = 0; j <= radius; j++) {
        lineSeen = this.field[newX + j][newY + i] || lineSeen;
      }
    }

    return lineSeen;
  }

  loadMap(png) {

  }

}