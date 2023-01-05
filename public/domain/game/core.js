import * as PF from '../../modules/pathfinding-browser.js';

import KeyboardListener from '../controls/keyboardListener.js';
import Map from './map/map.js';

import Fox from './elements/beings/fox.js';
import Rabbit from './elements/beings/rabbit.js';
import Carrot from './elements/things/carrot.js';

export default class Core {
  state = {
    beings: [],
    things: [],
  };
  map = new Map(500);

  constructor() {
    let keyboardListener = new KeyboardListener(document);
    let beingsTypes = [Fox, Rabbit];
    let thingsTypes = [Carrot];

    for (let index = 0; index < 30; index++) {
      let being = new beingsTypes[Math.floor(Math.random() * beingsTypes.length)]();
      being.live();
      this.state.beings.push(being);
    }
    this.state.beings[0].logger = true;

    for (let index = 0; index < 300; index++) {
      let thing = new thingsTypes[Math.floor(Math.random() * thingsTypes.length)]();
      thing.logger = true;
      thing.state.position = this.map.find.randomClearLocation();
      this.map.addElement(thing);
      this.state.things.push(thing);
    }
  }
  removeAThing(thing) {
    let index = this.state.things.indexOf(thing);
    if (index >= 0) {
      this.state.things.splice(index, 1);
    }
  }
  removeABeing(being) {
    let index = this.state.beings.indexOf(being);
    if (index >= 0) {
      this.state.beings.splice(index, 1);
    }
  }
}
