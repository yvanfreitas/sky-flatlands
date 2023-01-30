import SpriteController from '../spriteController.js';

export default class StoneSprite extends SpriteController {
  map = {
    Idle: {
      front: {
        img: [`assets/sprites/props/stone.png`],
        height: 0.4,
        width: 0.8,
      },
    },
  };
}
