import ModelController from '../modelController.js';

export default class TreeFController extends ModelController {
  minScale = 0.8;
  maxScale = 1.3;
  scale = Math.random() * (this.maxScale - this.minScale) + this.minScale;
  models = [
    'assets/models/props/Tree_F_01_LOD2.gltf',
    'assets/models/props/Tree_F_02_LOD2.gltf',
    'assets/models/props/Tree_F_03_LOD2.gltf',
  ];

  entity3d = {
    id: null,
    model: this.models[Math.floor(Math.random() * this.models.length)],
    position: null,
    animation: null,
    scale: `${this.scale} ${this.scale} ${this.scale}`,
    rotation: `0 ${Math.random() * 360} 0`,
  };
}
