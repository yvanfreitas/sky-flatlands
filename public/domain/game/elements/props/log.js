import Element from '../element.js';
import { LogController } from '../../modelControllers/props.js';
import Kinds from '../enuns/kinds.js';

export default class log extends Element {
  constructor() {
    super();
    this.kind = Kinds.Prop;
    this.modelController = new LogController(this);
    this.patchBlocker = true;
  }
}
