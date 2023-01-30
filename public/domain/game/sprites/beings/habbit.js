import SpriteController from '../spriteController.js';

export default class HabbitSprite extends SpriteController {
  map = {
    Idle: {
      front: {
        img: [`assets/sprites/beings/habbit.png`],
        height: 0.6,
        width: 0.8,
      },
    },
  };
}
