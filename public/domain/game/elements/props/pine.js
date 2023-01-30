import Element from '../element.js';
import { PineController } from '../../modelControllers/props.js';
import Kinds from '../enuns/kinds.js';

export default class pine extends Element {
  constructor() {
    super();
    this.kind = Kinds.Prop;
    this.modelController = new PineController(this);
    this.patchBlocker = false;
  }
}
