import Element from '../element.js';
import { RockController } from '../../modelControllers/props.js';
import Kinds from '../enuns/kinds.js';

export default class Rock extends Element {
  constructor() {
    super();
    this.kind = Kinds.Prop;
    this.modelController = new RockController(this);
    this.patchBlocker = false;
  }
}
