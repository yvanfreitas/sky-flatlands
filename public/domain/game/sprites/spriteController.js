export default class SpriteController {
  myself;
  class;
  spriteIndex = 0;
  img = '';
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
    this.img = this.map.Idle.front.img[this.spriteIndex];
  }
  getImage(pointOfView) {
    this.cycle();

    return this.img;
  }
  getPosition() {
    return {
      x: myself.state.position.x,
      y: 1,
      z: myself.state.position.y,
    };
  }
}
