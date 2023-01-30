import Element from '../element.js';
import { TreeSimpleController } from '../../modelControllers/props.js';
import Kinds from '../enuns/kinds.js';

export default class treeSimple extends Element {
  constructor() {
    super();
    this.kind = Kinds.Prop;
    this.modelController = new TreeSimpleController(this);
  }
}
