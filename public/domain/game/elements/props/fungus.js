import Element from '../element.js';
import { FungusController } from '../../modelControllers/props.js';
import Kinds from '../enuns/kinds.js';

export default class fungus extends Element {
  constructor() {
    super();
    this.kind = Kinds.Prop;
    this.modelController = new FungusController(this);
    this.patchBlocker = false;
  }
}
