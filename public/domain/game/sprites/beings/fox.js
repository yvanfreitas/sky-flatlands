import SpriteController from '../spriteController.js';

export default class FoxSprite extends SpriteController {
  map = {
    Idle: {
      front: {
        img: [`images/sprites/beings/fox.png`],
        height: 1,
        width: 1,
      },
      back: {
        img: [`images/sprites/beings/fox.png`],
        height: 1,
        width: 1,
      },
      side: {
        img: [`images/sprites/beings/fox.png`],
        height: 1,
        width: 1,
      },
    },
  };
}
