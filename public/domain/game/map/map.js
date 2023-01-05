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
    let from = element.state?.position;
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
    this.grid = setBlocked(this.grid, element.state.position);
    this.elements[element.state.position.x + ',' + element.state.position.y] = element;
  }
  removeElement(element) {
    this.grid = setClear(this.grid, element.state.position);
    this.elements[element.state.position.x + ',' + element.state.position.y] = undefined;
  }
}
