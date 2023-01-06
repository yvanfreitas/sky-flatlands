export default class MiniMap {
  context = null;
  tileSize = 2;

  constructor() {
    const screen = document.createElement('canvas');
    screen.setAttribute('id', 'screen');
    screen.setAttribute('width', 500);
    screen.setAttribute('height', 500);
    document.querySelector('body').appendChild(screen);
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
