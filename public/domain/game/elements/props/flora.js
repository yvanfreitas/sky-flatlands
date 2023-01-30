import Element from '../element.js';
import { FloraController } from '../../modelControllers/props.js';
import Kinds from '../enuns/kinds.js';

export default class flora extends Element {
  constructor() {
    super();
    this.kind = Kinds.Prop;
    this.modelController = new FloraController(this);
    this.patchBlocker = false;
  }
}
