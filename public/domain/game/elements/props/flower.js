import Element from '../element.js';
import { FlowerController } from '../../modelControllers/props.js';
import Kinds from '../enuns/kinds.js';

export default class flower extends Element {
  constructor() {
    super();
    this.kind = Kinds.Prop;
    this.modelController = new FlowerController(this);
    this.patchBlocker = false;
  }
}
