import Element from '../element.js';
import { BushController } from '../../modelControllers/props.js';
import Kinds from '../enuns/kinds.js';

export default class bush extends Element {
  constructor() {
    super();
    this.kind = Kinds.Prop;
    this.modelController = new BushController(this);
    this.patchBlocker = false;
  }
}
