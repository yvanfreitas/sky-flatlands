import uuid from '../util/uuid.js';
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
    age: 0,
    lifespan: 0,
    clock: 100,
    viewRange: 3,
  };
  runningActions = [];
  passiveActions = [];
  activeActions = [];
  life;
  logger = false;
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
    let actualPosition = this.state.position;

    if (newPosition != undefined) {
      newPosition = position;
    } else {
      newPosition = window.core?.map?.find.randomClearLocation();
    }
    this.state.position = newPosition;
    window.core?.map?.moveElement(this, newPosition);
  }
  setDestination(position) {
    if (position != undefined) {
      this.state.destination = position;
    } else {
      this.state.destination = window.core?.map?.find.randomClearLocation();
    }
  }
  speak(message) {
    if (this.logger) {
      console.log('%c' + this.constructor.name + ' / ' + this.id + ' :', 'color:#9c610a', message);
    }
  }
  remove() {
    window.core?.map?.removeElement(this);
    clearInterval(this.life);
    window.core.beings = window.core.beings.filter((being) => being.id != this.id);
  }
}
