export default class VRCore {
  stage = null;
  camera;

  constructor() {
    this.stage = document.createElement('a-scene');
    this.stage.setAttribute('id', 'stage');
    this.stage.setAttribute('culling-proxy', 'far: 100');
    document.querySelector('body').appendChild(this.stage);

    let ground = document.createElement('a-plane');
    ground.setAttribute('position', '225 0 225');
    ground.setAttribute('rotation', '-90 0 0');
    ground.setAttribute('width', '500');
    ground.setAttribute('height', '500');
    ground.setAttribute('material', {
      shader: 'standard',
      src: 'images/grass.png',
      roughness: 2.5,
      metalness: 0.0,
      repeat: '100 100',
    });
    document.querySelector('a-scene').appendChild(ground);

    let sky = document.createElement('a-sky');
    sky.setAttribute('src', 'images/sky.png');
    sky.setAttribute('position', '225 0 225');
    document.querySelector('a-scene').appendChild(sky);

    this.camera = document.createElement('a-entity');
    this.camera.setAttribute('id', 'camera');
    this.camera.setAttribute('camera', '');
    this.camera.setAttribute('fps-counter', '');
    this.camera.setAttribute('look-controls', '');
    this.camera.setAttribute('wasd-controls', '');
    this.camera.setAttribute('position', '255 1.6 255');
    document.querySelector('a-scene').appendChild(this.camera);

    let cursor = document.createElement('a-cursor');
    this.camera.appendChild(cursor);

    let fox = document.createElement('a-entity');
    fox.setAttribute('gltf-model', 'url(images/sprites/Fox_Animations.gltf)');
    fox.setAttribute('scale', '0.5 0.5 0.5');
    fox.setAttribute('position', '255 0 251');
    fox.setAttribute('animation-mixer', 'clip: Run');
    fox.setAttribute('onClick', 'this.setAttribute("animation-mixer", "clip: Jump; loop: once");');
    document.querySelector('a-scene').appendChild(fox);
    //this.render();
  }

  //render() {
  // this.renderElements();
  // requestAnimationFrame(() => {
  //   this.render();
  // });
  //}

  // renderElements() {
  //   window.core?.elements?.forEach((element) => {
  //     this.renderElement(element);
  //   });
  // }

  renderElement(element) {
    const id = 'id-' + element.id.replace(/-/g, '');
    let elementBox = document.querySelector(`#` + id);
    if (!elementBox) {
      elementBox = this.addNewElementImage(id, element);
    }
    this.updateElement(element, elementBox);
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
    let cameraPosition = this.camera.getAttribute('position');

    let sprite = element.sprite.getSprite(cameraPosition);
    elementBox.setAttribute('height', sprite.height);
    elementBox.setAttribute('width', sprite.width);
    elementBox.setAttribute('src', sprite.img);
    elementBox.setAttribute('position', {
      x: element.state.position.x,
      y: sprite.height / 2,
      z: element.state.position.y,
    });
  }

  removeElement(element) {
    const id = '#id-' + element.id.replace(/-/g, '');
    const elementBox = document.querySelector(id);
    if (!elementBox) return;
    elementBox.remove();
    elementBox.destroy();
  }
}
