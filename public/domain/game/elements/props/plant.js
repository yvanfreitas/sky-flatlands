import Element from '../element.js';
import { PlantController } from '../../modelControllers/props.js';
import Kinds from '../enuns/kinds.js';

export default class plant extends Element {
  constructor() {
    super();
    this.kind = Kinds.Prop;
    this.modelController = new PlantController(this);
    this.patchBlocker = false;
  }
}
