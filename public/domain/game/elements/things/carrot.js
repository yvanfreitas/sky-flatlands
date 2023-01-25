import Element from '../element.js';
import { Eat } from '../actions.js';
import Types from '../types.js';
import CarrotSprite from '../../sprites/things/carrot.js';
import Kinds from '../kinds.js';

export default class Carrot extends Element {
  constructor() {
    super();
    this.kind = Kinds.Thing;
    //this.state.lifespan = 300;
    this.passiveActions.push(new Eat());
    this.state.hp = 10;
    this.types.push(Types.Food);
    this.types.push(Types.Vegetable);
    this.render.miniMapColor = 'orange';

    this.sprite = new CarrotSprite(this);
  }
}
