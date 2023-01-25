import { setBlocked, setClear, isClear, generateGrid } from './gridFunctions.js';
import Kinds from '../elements/kinds.js';
export default class Find {
  constructor(map) {
    this.map = map;
  }
  elementsAround = function (position, range) {
    let elements = [];
    for (let x = position?.x - range; x <= position?.x + range; x++) {
      for (let y = position?.y - range; y <= position?.y + range; y++) {
        if (x == position?.x && y == position?.y) {
          continue;
        }
        if (x < 0 || y < 0 || x >= this.map.mapSize || y >= this.map.mapSize) {
          continue;
        }
        if (isClear(this.map.grid, { x, y })) {
          continue;
        }
        if (this.map.elements[x + ',' + y]?.kind != Kinds.Prop) {
          elements.push(this.map.elements[x + ',' + y]);
        }
      }
    }
    if (elements.length > 0) {
      elements = this.sortByDistance(position, elements);
    }
    return elements;
  };

  randomClearLocation = function (reference, range) {
    let position = this.randomLocation(reference, range);
    while (!isClear(this.map.grid, position)) {
      position = this.randomLocation();
    }
    return position;
  };

  randomLocation = function (reference, range) {
    if (reference && range) {
      return {
        x: Math.floor(Math.random() * range) + reference.x - range / 2,
        y: Math.floor(Math.random() * range) + reference.y - range / 2,
      };
    }

    let mapSize = this.map.mapSize;
    return { x: Math.floor(Math.random() * mapSize), y: Math.floor(Math.random() * mapSize) };
  };

  sortByDistance(position, elements) {
    return elements.sort((a, b) => {
      let distanceA = this.distance(position, a.state.position);
      let distanceB = this.distance(position, b.state.position);
      return distanceA - distanceB;
    });
  }

  distance = function (positionA, positionB) {
    const a =
      positionA?.x > positionB?.x ? positionA?.x - positionB?.x : positionB?.x - positionA?.x;
    const b =
      positionA?.y > positionB?.y ? positionA?.y - positionB?.y : positionB?.y - positionA?.y;
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  };
}
