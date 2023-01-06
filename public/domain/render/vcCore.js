export default class VRCore {
  stage = null;

  constructor() {
    this.stage = document.createElement('a-scene');
    this.stage.setAttribute('id', 'stage');
    document.querySelector('body').appendChild(this.stage);

    let ground = document.createElement('a-plane');
    ground.setAttribute('position', '0 0 0');
    ground.setAttribute('rotation', '-90 0 0');
    ground.setAttribute('width', '500');
    ground.setAttribute('height', '500');
    ground.setAttribute('color', '#3BC874');
    document.querySelector('a-scene').appendChild(ground);

    let sky = document.createElement('a-sky');
    sky.setAttribute('color', '#aaCCFF');
    document.querySelector('a-scene').appendChild(sky);

    this.render();
  }

  render() {
    this.renderElements();

    requestAnimationFrame(() => {
      this.render();
    });
  }

  renderElements() {
    window.core?.elements?.forEach((element) => {
      const id = '#id' + element.id.replace(/-/g, '');
      const elementBox = document.querySelector(id);
      if (elementBox) {
        this.updateElement(element, elementBox);
      } else {
        this.addNewElement(element);
      }
    });
  }

  addNewElement(element) {
    const elementBox = document.createElement('a-box');
    const id = 'id' + element.id.replace(/-/g, '');

    elementBox.setAttribute('id', id);
    elementBox.setAttribute('position', {
      x: element.state.position.x,
      y: element.state.position.z,
      z: element.state.position.y,
    });
    elementBox.setAttribute('color', element.render.miniMapColor);
    this.stage.appendChild(elementBox);
  }

  updateElement(element, elementBox) {
    elementBox.setAttribute('position', {
      x: element.state.position.x,
      y: element.state.position.z,
      z: element.state.position.y,
    });
  }

  removeElement(element) {
    const id = '#id' + element.id.replace(/-/g, '');
    const elementBox = document.querySelector(id);
    if (!elementBox) return;
    elementBox.remove();
    elementBox.destroy();
  }

  draw(element) {
    let position = element.state.position;

    this.context.fillStyle = element.render.miniMapColor;
    this.context.fillRect(position?.x, position?.y, this.tileSize, this.tileSize);
  }
}
