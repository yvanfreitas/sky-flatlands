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
    this.camera.setAttribute('position', '75 1.6 75');
    document.querySelector('a-scene').appendChild(this.camera);

    let cursor = document.createElement('a-cursor');
    this.camera.appendChild(cursor);
  }

  // ----- elementos 2d
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

  // ----- modelos 3d
  upsertElementModel(entity3d) {
    const id = 'id-' + entity3d.id.replace(/-/g, '');
    let domElement = document.querySelector(`#` + id);
    if (!domElement) {
      domElement = this.createDomElement(id);
    }
    this.updateDomElement(entity3d, domElement);
  }

  createDomElement(id) {
    const domElement = document.createElement('a-entity');
    domElement.setAttribute('id', id);
    domElement.setAttribute('shadow', 'cast:true; receive:true');
    this.stage.appendChild(domElement);
    return domElement;
  }

  updateDomElement(entity3d, domElement) {
    const currentScale = domElement.getAttribute('scale');
    const currentModel = domElement.getAttribute('gltf-model');
    const currentAnimation = domElement.getAttribute('animation-mixer');
    const currentPosition = domElement.getAttribute('position');
    const currentRotation = domElement.getAttribute('look-at');

    if (currentScale != entity3d.scale) domElement.setAttribute('scale', entity3d.scale);

    if (currentModel != entity3d.model) domElement.setAttribute('gltf-model', entity3d.model);

    const animationMixer = this.mapAnimationToMixer(entity3d.animation);
    if (currentAnimation != animationMixer && animationMixer != null)
      domElement.setAttribute('animation-mixer', animationMixer);

    if (currentPosition != entity3d.position && entity3d.position != null)
      domElement.setAttribute('position', entity3d.position);

    if (currentRotation != entity3d.lookDirection && entity3d.lookDirection != null)
      domElement.setAttribute('look-at', entity3d.lookDirection);
  }

  mapAnimationToMixer(animation) {
    return `clip: ${animation}`;
  }

  removeElement(element) {
    const id = '#id-' + element.id.replace(/-/g, '');
    const elementBox = document.querySelector(id);
    if (!elementBox) return;
    elementBox.remove();
    elementBox.destroy();
  }

  getCameraPosition() {
    let rawPosition = this.camera.getAttribute('position');
    return { x: rawPosition.x, y: rawPosition.z };
  }
}
