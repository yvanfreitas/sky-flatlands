import Element from '../element.js';
import { Age, Die, Eat, Move, See, Think } from '../actions.js';
import Types from '../types.js';

import Feelings from '../feelings.js';
export default class Rabbit extends Element {
  constructor() {
    super();
    this.state.lifespan = 500;
    this.runningActions.push(new Die(), new Age(), new Move(), new See(), new Think());
    this.activeActions.push(new Eat());
    this.state.hp = 10;
    //this.state.viewRange = 30;
    this.types.push(Types.Animal);
    this.types.push(Types.Herbivorous);
    this.render.miniMapColor = 'gray';
    this.state.speed = 2;

    this.state.feelings.push(Feelings.Hungry);
  }
}
