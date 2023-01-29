import { Move } from '../elements/actions.js';
export default class ModelController {
  myself;
  class;
  entity3d = {
    id: null,
    model: null,
    position: null,
    animation: null,
    scale: '1 1 1',
    lookDirection: null,
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
    this.setLookDirection();
    window.vrCore?.upsertElementModel(this.entity3d);
  }

  setAnimation() {
    this.entity3d.animation = 'Run';
  }

  setLookDirection() {
    const indexOfMove = this.myself.runningActions.findIndex((action) => action instanceof Move);
    const path = this.myself.runningActions[indexOfMove].getPath();

    if (path.length == 0) return;

    const nextPosition = {
      x: path[0][0],
      y: path[0][1],
    };

    this.entity3d.lookDirection = {
      x: nextPosition.x,
      y: 0,
      z: nextPosition.y,
    };
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
