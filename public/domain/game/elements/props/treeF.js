import Element from '../element.js';
import { TreeFController } from '../../modelControllers/props.js';
import Kinds from '../enuns/kinds.js';

export default class treeF extends Element {
  constructor() {
    super();
    this.kind = Kinds.Prop;
    this.modelController = new TreeFController(this);
    this.patchBlocker = true;
  }
}
