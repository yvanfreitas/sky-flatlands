import Element from '../element.js';
import { FlowerBushController } from '../../modelControllers/props.js';
import Kinds from '../enuns/kinds.js';

export default class flowerBush extends Element {
  constructor() {
    super();
    this.kind = Kinds.Prop;
    this.modelController = new FlowerBushController(this);
    this.patchBlocker = false;
  }
}
