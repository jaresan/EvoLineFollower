import * as Settings from './constants/WorldSettings';

export default class World {

  constructor() {
    this.field = [];
    for (let i = 0; i < Settings.FIELD_WIDTH_IN_CM * Settings.PIXELS_PER_MM * 10; i++) {
      this.field[i] = [];
      this.field[i][Settings.FIELD_HEIGHT_IN_CM - 1] = 0;
    }
  }

  loadMap(png) {

  }

}