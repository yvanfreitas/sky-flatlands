import Element from '../element.js';
import { RootController } from '../../modelControllers/props.js';
import Kinds from '../enuns/kinds.js';

export default class root extends Element {
  constructor() {
    super();
    this.kind = Kinds.Prop;
    this.modelController = new RootController(this);
    this.patchBlocker = false;
  }
}
