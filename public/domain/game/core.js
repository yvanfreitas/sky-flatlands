import * as PF from '../../modules/pathfinding-browser.js';

import KeyboardListener from '../controls/keyboardListener.js';
import Map from './map/map.js';

import Fox from './elements/beings/fox.js';
import Rabbit from './elements/beings/rabbit.js';
import Carrot from './elements/things/carrot.js';
import {
  Buds,
  Bush,
  Conifer,
  DeadTrunk,
  Flora,
  Flower,
  FlowerBush,
  Fungus,
  Grass,
  Herb,
  Log,
  Pine,
  Plant,
  Rock,
  Root,
  Shrub,
  TreeE,
  TreeF,
  TreeGiant,
  TreeSimple,
} from './elements/props.js';
import { Move } from './elements/actions.js';

export default class Core {
  elements = [];
  props = [];
  map = new Map(250);

  constructor() {
    let keyboardListener = new KeyboardListener(document);
  }
  init() {
    this.generateRandomWorld();
  }
  removeAElement(element) {
    window.aFrameCore.removeElement(element);
    window.core?.map?.removeElement(element);
    let index = this.elements.indexOf(element);
    if (index >= 0) {
      this.elements.splice(index, 1);
    }
    element = null;
  }
  generateRandomWorld() {
    let beingsTypes = [Fox];
    let thingsTypes = [Carrot];
    let propsTypes = [
      Buds,
      Bush,
      Conifer,
      DeadTrunk,
      Flora,
      Flower,
      FlowerBush,
      Fungus,
      Grass,
      Herb,
      Log,
      Pine,
      Plant,
      Rock,
      Root,
      TreeE,
      TreeF,
      TreeGiant,
      TreeSimple,
    ];
    let mapSize = this.map.mapSize;

    for (let index = 0; index < 10; index++) {
      let being = new beingsTypes[Math.floor(Math.random() * beingsTypes.length)]();

      being.teleport({
        x: Math.floor(Math.random() * mapSize),
        y: Math.floor(Math.random() * mapSize),
      });

      let indexOfMove = being.runningActions.findIndex((action) => action instanceof Move);
      this.elements.push(being);
    }

    for (let index = 0; index < 1; index++) {
      let thing = new thingsTypes[Math.floor(Math.random() * thingsTypes.length)]();
      thing.live();
      thing.teleport({
        x: Math.floor(Math.random() * mapSize),
        y: Math.floor(Math.random() * mapSize),
      });
      this.elements.push(thing);
    }

    for (let index = 0; index < 500; index++) {
      let prop = new propsTypes[Math.floor(Math.random() * propsTypes.length)]();
      prop.live();
      prop.teleport({
        x: Math.floor(Math.random() * mapSize),
        y: Math.floor(Math.random() * mapSize),
      });
      this.elements.push(prop);
    }

    this.elements[0].logger = true;
    this.elements[0].render.miniMapColor = 'purple';
  }
}
