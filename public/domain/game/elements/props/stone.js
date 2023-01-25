import Element from '../element.js';
import StoneSprite from '../../sprites/props/stone.js';

export default class Stone extends Element {
  constructor() {
    super();

    this.sprite = new StoneSprite(this);
  }
}
