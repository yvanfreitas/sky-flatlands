import Element from '../element.js';
import { GrassController } from '../../modelControllers/props.js';
import Kinds from '../enuns/kinds.js';

export default class grass extends Element {
  constructor() {
    super();
    this.kind = Kinds.Prop;
    this.modelController = new GrassController(this);
    this.patchBlocker = false;
  }
}
