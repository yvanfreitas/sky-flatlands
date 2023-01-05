import uuid from '../util/uuid.js';
import { Move } from './actions.js';
import Map from '../map/map.js';

export default class Element {
  id = uuid();
  state = {
    position: {
      x: 0,
      y: 0,
    },
    destination: {
      x: 0,
      y: 0,
    },
    feelings: [],
    age: 0,
    lifespan: 0,
    clock: 30,
    viewRange: 100,
  };
  types = [];
  runningActions = [];
  passiveActions = [];
  activeActions = [];
  life;
  logger = false;
  render = { miniMapColor: 'white' };
  constructor(state) {
    if (state != undefined) {
      this.state = state;
    }
  }

  live() {
    if (this.life == undefined) {
      this.life = setInterval(this.live.bind(this), this.state.clock);
    }
    this.runningActions.forEach((action) => {
      action.run(this);
    });
  }
  teleport(newPosition) {
    if (newPosition == undefined) {
      newPosition = window.core?.map?.find.randomClearLocation();
    }
    this.state.position = newPosition;

    window.core?.map?.addElement(this);
  }
  speak(message) {
    if (this.logger) {
      console.log(
        '%c' + this.constructor.name + ' [' + this.state.feelings + '] :',
        'color:#9c610a',
        message,
      );
    }
  }
  remove() {
    clearInterval(this.life);
    window.core.removeAElement(this);
  }
}
