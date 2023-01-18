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
    //
    //nl.wikipedia.org/wiki/MissingNo.#/media/Bestand:MissingNo.png
    //https://images6.fanpop.com/image/photos/38500000/Bunny-Sprite-terraria-38574148-200-167.gif
    //'https://cdn.weasyl.com/~wretneck/submissions/1183083/43707783d832368997e15b2c0af1d0faa0e3c48ba24e8619c008795da82a182d/wretneck-undertale-inspired-sprite-death-fox.png';
  }
  getImage(pointOfView) {
    this.cycle();

    return this.img;
  }
  getRotation(pointOfView) {
    const position = this.myself.state.position;
    let xDistance =
      pointOfView.x > position.x ? pointOfView.x - position.x : position.x - pointOfView.x;
    let yDistance =
      pointOfView.z > position.y ? pointOfView.z - position.y : position.y - pointOfView.z;
    let tan = yDistance / xDistance;
    let y = Math.tan(tan);

    console.log(
      `position.x: ${position.x}, position.y: ${position.y}, pointOfView.z: ${pointOfView.z}, pointOfView.x: ${pointOfView.x}`,
    );
    //console.log(`xDistance: ${xDistance}, yDistance: ${yDistance}, tan: ${tan}, y: ${y}`);

    return `0 ${y} 0`;
  }

  getPosition() {
    return {
      x: myself.state.position.x,
      y: 1,
      z: myself.state.position.y,
    };
  }
}
