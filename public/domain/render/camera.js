export default class Camera {
  domElement;
  following = null;

  constructor() {
    this.domElement = document.createElement('a-entity');
    this.domElement.setAttribute('id', 'camera');
    this.domElement.setAttribute('camera', '');
    this.domElement.setAttribute('fps-counter', '');
    this.domElement.setAttribute('look-controls', '');
    this.domElement.setAttribute('wasd-controls', '');
    this.domElement.setAttribute('position', '255 1.6 255');
    this.domElement.setAttribute('fov', '200');
    document.querySelector('a-scene').appendChild(this.domElement);

    //let cursor = document.createElement('a-cursor');
    //this.camera.appendChild(cursor);
  }

  follow(element) {
    if (element == undefined) {
      element = window.core?.elements[0];
    }
    this.following = element;
    //this.domElement.setAttribute('spectator', 'true');
  }
  update(element) {
    const currentPosition = element.getAttribute('position');

    this.domElement.setAttribute('position', {
      x: currentPosition.x,
      z: currentPosition.z,
      y: 1.6,
    });
  }

  lookAt(position) {}
  setLocation(position) {}
}
