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
  map = new Map(500);

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
  removeAllElements() {
    this.elements.forEach((element) => {
      element.remove();
    });
  }
  addRandomBeings(quantity) {
    let beingsTypes = [Fox];
    let mapSize = this.map.mapSize;

    for (let index = 0; index < quantity; index++) {
      let being = new beingsTypes[Math.floor(Math.random() * beingsTypes.length)]();

      being.teleport({
        x: Math.floor(Math.random() * mapSize),
        y: Math.floor(Math.random() * mapSize),
      });

      let indexOfMove = being.runningActions.findIndex((action) => action instanceof Move);
      this.elements.push(being);
    }
  }
  addRandomThings(quantity) {
    let thingsTypes = [Carrot];
    let mapSize = this.map.mapSize;

    for (let index = 0; index < quantity; index++) {
      let thing = new thingsTypes[Math.floor(Math.random() * thingsTypes.length)]();
      thing.live();
      thing.teleport({
        x: Math.floor(Math.random() * mapSize),
        y: Math.floor(Math.random() * mapSize),
      });
      this.elements.push(thing);
    }
  }
  addRandomProps(quantity) {
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

    for (let index = 0; index < quantity; index++) {
      let prop = new propsTypes[Math.floor(Math.random() * propsTypes.length)]();
      prop.live();
      prop.teleport({
        x: Math.floor(Math.random() * mapSize),
        y: Math.floor(Math.random() * mapSize),
      });
      this.elements.push(prop);
    }
  }

  generateRandomWorld() {
    this.addRandomBeings(50);
    this.addRandomThings(20);
    this.addRandomProps(200);

    this.elements[0].logger = true;
    this.elements[0].render.miniMapColor = 'purple';
  }
}
