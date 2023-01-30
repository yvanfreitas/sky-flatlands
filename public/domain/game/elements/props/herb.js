import Element from '../element.js';
import { HerbController } from '../../modelControllers/props.js';
import Kinds from '../enuns/kinds.js';

export default class herb extends Element {
  constructor() {
    super();
    this.kind = Kinds.Prop;
    this.modelController = new HerbController(this);
    this.patchBlocker = false;
  }
}
