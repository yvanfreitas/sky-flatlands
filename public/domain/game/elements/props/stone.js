import Element from '../element.js';
import StoneSprite from '../../sprites/props/stone.js';
import Types from '../types.js';
import Kinds from '../kinds.js';

export default class Stone extends Element {
  constructor() {
    super();
    this.kind = Kinds.Prop;
    this.types.push(Types.Prop);
    this.sprite = new StoneSprite(this);
  }
}
