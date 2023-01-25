import Element from '../element.js';
import TreeSprite from '../../sprites/props/tree.js';

export default class Tree extends Element {
  constructor() {
    super();

    this.sprite = new TreeSprite(this);
  }
}
