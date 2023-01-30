import Element from '../element.js';
import { ShrubController } from '../../modelControllers/props.js';
import Kinds from '../enuns/kinds.js';

export default class shrub extends Element {
  constructor() {
    super();
    this.kind = Kinds.Prop;
    this.modelController = new ShrubController(this);
    this.patchBlocker = false;
  }
}
