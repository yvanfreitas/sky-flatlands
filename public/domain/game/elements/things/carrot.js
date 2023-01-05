import Element from '../element.js';
import Eat from '../actions/eat.js';

export default class Carrot extends Element {
  constructor() {
    super();
    //this.state.lifespan = 300;
    this.passiveActions.push(new Eat());
    this.state.hp = 10;
  }
}
