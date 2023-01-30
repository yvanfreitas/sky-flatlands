import Element from '../element.js';
import { TreeEController } from '../../modelControllers/props.js';
import Kinds from '../enuns/kinds.js';

export default class treeE extends Element {
  constructor() {
    super();
    this.kind = Kinds.Prop;
    this.modelController = new TreeEController(this);
    this.patchBlocker = true;
  }
}
