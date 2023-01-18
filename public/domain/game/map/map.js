import { setBlocked, setClear, isClear, generateGrid } from './gridFunctions.js';
import Find from './find.js';
export default class Map {
  mapSize = 0;
  grid = [];
  elements = [];
  find = new Find(this);

  constructor(mapSize) {
    this.mapSize = mapSize;
    this.grid = generateGrid(mapSize);
  }

  moveElement(element, newPosition) {
    let from = element.state.position;
    let to = newPosition;

    let isAValidFrom = from?.x != undefined && from?.y != undefined;
    let isAValidTo = to?.x != undefined && to?.y != undefined;

    if (!isAValidFrom || !isAValidTo) {
      return false;
    }

    if (!isClear(this.grid, to)) {
      return false;
    }

    this.grid = setBlocked(this.grid, to);
    this.grid = setClear(this.grid, from);

    if (this.elements[from.x + ',' + from.y] !== undefined) {
      this.elements[from.x + ',' + from.y] = undefined;
    }

    this.elements[to.x + ',' + to.y] = element;

    return true;
  }
  addElement(element) {
    let position = element.state.position;
    this.grid = setBlocked(this.grid, position);
    this.elements[position.x + ',' + position.y] = element;
  }
  removeElement(element) {
    let position = element.state.position;
    this.grid = setClear(this.grid, position);
    this.elements[position.x + ',' + position.y] = undefined;
  }
}
