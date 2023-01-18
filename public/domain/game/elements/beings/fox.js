import Element from '../element.js';
import { Age, Die, Eat, Move, See, Think } from '../actions.js';
import Types from '../types.js';
import FoxSprite from '../../sprites/beings/fox.js';

import Feelings from '../feelings.js';

export default class Fox extends Element {
  constructor() {
    super();
    this.state.lifespan = 300;
    this.runningActions.push(new Die(), new Age(), new Move(), new See(), new Think());
    this.activeActions.push(new Eat());
    this.state.hp = 10;
    // this.state.viewRange = 20;
    this.types.push(Types.Animal);
    this.types.push(Types.Carnivorous);
    this.state.feelings.push(Feelings.Hungry);
    this.render.miniMapColor = 'red';
    this.sprite = new FoxSprite(this);
  }
}
