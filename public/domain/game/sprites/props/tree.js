import SpriteController from '../spriteController.js';

export default class TreeSprite extends SpriteController {
  map = {
    Idle: {
      front: {
        img: [`assets/sprites/props/tree.gif`],
        height: 5,
        width: 2,
      },
    },
  };
}
