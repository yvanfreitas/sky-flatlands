import Element from '../element.js';
import { BudsController } from '../../modelControllers/props.js';
import Kinds from '../enuns/kinds.js';

export default class buds extends Element {
  constructor() {
    super();
    this.kind = Kinds.Prop;
    this.modelController = new BudsController(this);
    this.patchBlocker = false;
  }
}
