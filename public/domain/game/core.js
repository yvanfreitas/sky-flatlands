import * as PF from '../../modules/pathfinding-browser.js';

import KeyboardListener from '../controls/keyboardListener.js';
import Map from './map/map.js';

import Fox from './elements/beings/fox.js';
import Rabbit from './elements/beings/rabbit.js';
import Carrot from './elements/things/carrot.js';

import { Move } from './elements/actions.js';

export default class Core {
  state = {
    beings: [],
    things: [],
  };
  elements = [];
  map = new Map(500);

  constructor() {
    let keyboardListener = new KeyboardListener(document);
  }
  init() {
    let beingsTypes = [Fox, Rabbit];
    let thingsTypes = [Carrot];
    let mapSize = this.map.mapSize;

    for (let index = 0; index < 10; index++) {
      let being = new beingsTypes[Math.floor(Math.random() * beingsTypes.length)]();
      being.live();
      being.teleport({
        x: Math.floor(Math.random() * mapSize),
        y: Math.floor(Math.random() * mapSize),
      });

      let indexOfMove = being.runningActions.findIndex((action) => action instanceof Move);
      //being.runningActions[indexOfMove]?.setDestination();

      this.elements.push(being);
    }

    for (let index = 0; index < 100; index++) {
      let thing = new thingsTypes[Math.floor(Math.random() * thingsTypes.length)]();
      thing.logger = true;
      thing.teleport({
        x: Math.floor(Math.random() * mapSize),
        y: Math.floor(Math.random() * mapSize),
      });
      this.elements.push(thing);
    }

    this.elements[0].logger = true;
    this.elements[0].render.miniMapColor = 'purple';
  }
  removeAElement(element) {
    window.core?.map?.removeElement(element);
    let index = this.elements.indexOf(element);
    if (index >= 0) {
      this.elements.splice(index, 1);
    }
    element = null;
  }
}
