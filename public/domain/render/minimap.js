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

    // this.renderCollisionGrid();

    requestAnimationFrame(() => {
      this.render();
    });
  }

  renderCollisionGrid() {
    window.core?.map?.grid?.forEach((row, x) => {
      row.forEach((cell, y) => {
        if (cell === 1) {
          this.context.fillStyle = 'blue';
          this.context.fillRect(x, y, this.tileSize, this.tileSize);
        }
      });
    });
  }

  renderElements() {
    window.core?.elements?.forEach((element) => {
      this.draw(element);
    });

    this.draw(window.core?.elements[0]);
  }

  draw(element) {
    let position = element.state.position;

    this.context.fillStyle = element.render.miniMapColor;
    this.context.fillRect(position?.x, position?.y, this.tileSize, this.tileSize);
  }
}
