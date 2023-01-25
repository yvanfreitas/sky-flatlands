import SpriteController from '../spriteController.js';

export default class TreeSprite extends SpriteController {
  map = {
    Idle: {
      front: {
        img: [`images/sprites/props/tree.gif`],
        height: 5,
        width: 2,
      },
    },
  };
}
