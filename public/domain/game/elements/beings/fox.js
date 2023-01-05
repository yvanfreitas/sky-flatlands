import Element from '../element.js';
import Die from '../actions/die.js';
import Age from '../actions/age.js';
import Move from '../actions/move.js';
import Eat from '../actions/eat.js';
import See from '../actions/see.js';

export default class Fox extends Element {
  constructor() {
    super();
    this.state.lifespan = 300;
    this.state.clock = 150;
    this.runningActions.push(new Die(), new Age(), new Move(), new See());
    this.activeActions.push(new Eat());
    this.state.hp = 10;
    this.state.viewRange = 8;
  }
}
