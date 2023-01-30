export default class Camera {
  domElement;

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

  follow(element) {}
  lookAt(position) {}
  setLocation(position) {}
}
