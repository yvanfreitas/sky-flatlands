export default class ModelController {
  myself;
  class;
  entity3d = {
    id: null,
    model: null,
    position: null,
    animation: null,
    scale: '1 1 1',
    rotation: null,
  };

  constructor(element) {
    this.myself = element;
    this.class = element?.constructor?.name;
  }

  update() {
    if (this.entity3d.id == null) this.entity3d.id = this.myself?.id;
    if (this.entity3d.id == null) return;
    this.setPosition();
    this.setAnimation();
    this.setRotation();
    window.vrCore?.upsertElementModel(this.entity3d);
  }

  setAnimation() {
    this.entity3d.animation = 'Run';
  }

  setRotation() {
    this.entity3d.rotation = '0 45 0';
  }

  setPosition() {
    const state = this.myself?.getState();
    this.entity3d.position = {
      x: state?.position.x,
      y: 0,
      z: state?.position.y,
    };
  }
}
