import Element from '../element.js';
import TreeSprite from '../../sprites/props/tree.js';
import Types from '../types.js';
import Kinds from '../kinds.js';

export default class Tree extends Element {
  constructor() {
    super();
    this.kind = Kinds.Prop;
    this.types.push(Types.Prop);
    this.sprite = new TreeSprite(this);
  }
}
