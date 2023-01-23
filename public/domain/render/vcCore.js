export default class VRCore {
  stage = null;
  camera;

  constructor() {
    this.stage = document.createElement('a-scene');
    this.stage.setAttribute('id', 'stage');
    document.querySelector('body').appendChild(this.stage);

    let ground = document.createElement('a-plane');
    ground.setAttribute('position', '225 0 225');
    ground.setAttribute('rotation', '-90 0 0');
    ground.setAttribute('width', '500');
    ground.setAttribute('height', '500');
    ground.setAttribute('color', '#3BC874');
    document.querySelector('a-scene').appendChild(ground);

    let sky = document.createElement('a-sky');
    sky.setAttribute('color', '#aaCCFF');
    sky.setAttribute('position', '225 0 225');
    document.querySelector('a-scene').appendChild(sky);

    this.camera = document.createElement('a-entity');
    this.camera.setAttribute('id', 'camera');
    this.camera.setAttribute('camera', '');
    this.camera.setAttribute('look-controls', '');
    this.camera.setAttribute('wasd-controls', '');
    this.camera.setAttribute('position', '255 1.6 255');
    document.querySelector('a-scene').appendChild(this.camera);

    /*let sunSky = document.createElement('a-sun-sky');
    document.querySelector('a-scene').appendChild(sunSky);

    let sun = document.createElement('a-entity');
    sun.setAttribute('material', 'shader: sunSky');
    document.querySelector('a-scene').appendChild(sun);*/

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
      const id = 'id-' + element.id.replace(/-/g, '');
      let elementBox = document.querySelector(`#` + id);
      if (!elementBox) {
        elementBox = this.addNewElementImage(id, element);
      }
      this.updateElement(element, elementBox);
    });
  }

  addNewElementImage(id, element) {
    const elementBox = document.createElement('a-image');
    elementBox.setAttribute('id', id);
    elementBox.setAttribute('color', element.render.miniMapColor);
    elementBox.setAttribute('look-at', '#camera');
    elementBox.setAttribute('shadow', 'cast:true; receive:true');

    this.stage.appendChild(elementBox);
    return elementBox;
  }

  updateElement(element, elementBox) {
    elementBox.setAttribute('position', {
      x: element.state.position.x,
      y: 1,
      z: element.state.position.y,
    });

    let cameraPosition = this.camera.getAttribute('position');
    elementBox.setAttribute('src', element.sprite.getImage(cameraPosition));
  }

  removeElement(element) {
    const id = '#id-' + element.id.replace(/-/g, '');
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
