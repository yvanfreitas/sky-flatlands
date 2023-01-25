export default class SpriteController {
  myself;
  class;
  spriteIndex = 0;
  sprite = {};
  map = {
    Idle: {
      front: {
        img: [`https://upload.wikimedia.org/wikipedia/commons/6/62/MissingNo.png`],
        height: 1,
        width: 0.5,
      },
      back: {
        img: [`https://upload.wikimedia.org/wikipedia/commons/6/62/MissingNo.png`],
        height: 1,
        width: 0.5,
      },
      side: {
        img: [`https://upload.wikimedia.org/wikipedia/commons/6/62/MissingNo.png`],
        height: 1,
        width: 0.5,
      },
    },
  };
  constructor(element) {
    this.myself = element;
    this.class = element?.constructor?.name;
  }

  cycle() {
    this.sprite = {
      img: this.map.Idle.front.img[this.spriteIndex],
      height: this.map.Idle.front.height,
      width: this.map.Idle.front.width,
    };
  }

  getSprite(pointOfView) {
    this.cycle();
    return this.sprite;
  }

  getPosition() {
    return {
      x: myself.state.position.x,
      y: 1,
      z: myself.state.position.y,
    };
  }
}
