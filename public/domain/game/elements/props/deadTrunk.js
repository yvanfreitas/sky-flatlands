import Element from '../element.js';
import { DeadTrunkController } from '../../modelControllers/props.js';
import Kinds from '../enuns/kinds.js';

export default class deadTrunk extends Element {
  constructor() {
    super();
    this.kind = Kinds.Prop;
    this.modelController = new DeadTrunkController(this);
    this.patchBlocker = false;
  }
}
