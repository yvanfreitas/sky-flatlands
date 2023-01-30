import Element from '../element.js';
import { TreeGiantController } from '../../modelControllers/props.js';
import Kinds from '../enuns/kinds.js';

export default class treeGiant extends Element {
  constructor() {
    super();
    this.kind = Kinds.Prop;
    this.modelController = new TreeGiantController(this);
    this.patchBlocker = true;
  }
}
