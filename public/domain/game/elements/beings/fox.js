import Element from '../element.js';
import { Age, Die, Eat, Move, See, Think } from '../actions.js';
import Types from '../enuns/types.js';
import Kinds from '../enuns/kinds.js';
import FoxModelController from '../../modelControllers/beigns/fox.js';
import Feelings from '../enuns/feelings.js';

export default class Fox extends Element {
  constructor() {
    super();
    this.kind = Kinds.Being;
    this.state.lifespan = 300;
    this.runningActions.push(new Die(), new Age(), new Move(), new See(), new Think());
    this.activeActions.push(new Eat());
    this.state.hp = 10;
    // this.state.viewRange = 20;
    this.types.push(Types.Animal);
    this.types.push(Types.Carnivorous);
    this.state.feelings.push(Feelings.Hungry);
    this.render.miniMapColor = 'red';
    this.modelController = new FoxModelController(this);
    this.live();
  }
}
