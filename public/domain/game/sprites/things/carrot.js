import SpriteController from '../spriteController.js';

export default class CarrotSprite extends SpriteController {
  map = {
    Idle: {
      front: {
        img: [`assets/sprites/things/carrot.png`],
        height: 1,
        width: 0.5,
      },
    },
  };
}
