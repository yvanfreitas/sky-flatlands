import { Move } from '../game/elements/actions.js';

export default class MiniMap {
  context = null;
  tileSize = 2;
  context = null;

  constructor(screen) {
    this.context = screen.getContext('2d');
    this.render();
  }

  render() {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);

    this.renderElements();

    requestAnimationFrame(() => {
      this.render();
    });
  }

  renderElements() {
    window.core?.state?.beings?.forEach((being) => {
      this.draw(being);
    });

    window.core?.state?.beings?.forEach((thing) => {
      this.draw(thing);
    });

    this.draw(window.core?.state?.beings[0]);
  }

  draw(element) {
    let indexOfMove = element.runningActions.findIndex((action) => action instanceof Move);
    let position = {
      x: element.runningActions[indexOfMove].position.x,
      y: element.runningActions[indexOfMove].position.y,
    };

    this.context.fillStyle = element.render.miniMapColor;
    this.context.fillRect(position.x, position.y, this.tileSize, this.tileSize);
  }
}
