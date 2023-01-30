import Element from '../element.js';
import { ConiferController } from '../../modelControllers/props.js';
import Kinds from '../enuns/kinds.js';

export default class Conifer extends Element {
  constructor() {
    super();
    this.kind = Kinds.Prop;
    this.modelController = new ConiferController(this);
    this.patchBlocker = false;
  }
}
