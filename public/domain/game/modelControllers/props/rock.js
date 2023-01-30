import ModelController from '../modelController.js';

export default class RockController extends ModelController {
  minScale = 0.1;
  maxScale = 0.4;
  scale = Math.random() * (this.maxScale - this.minScale) + this.minScale;
  models = [
    'assets/models/props/Rock_A_01_LOD2.gltf',
    'assets/models/props/Rock_A_02_LOD2.gltf',
    'assets/models/props/Rock_A_03_LOD2.gltf',
    'assets/models/props/Rock_A_04_LOD2.gltf',
    'assets/models/props/Rock_A_05_LOD2.gltf',
    'assets/models/props/Rock_A_06_LOD2.gltf',
    'assets/models/props/Rock_B_01_LOD2.gltf',
    'assets/models/props/Rock_B_02_LOD2.gltf',
    'assets/models/props/Rock_B_03_LOD2.gltf',
    'assets/models/props/Rock_B_04_LOD2.gltf',
    'assets/models/props/Rock_B_05_LOD2.gltf',
    'assets/models/props/Rock_B_06_LOD2.gltf',
    'assets/models/props/Rock_C_01_LOD2.gltf',
    'assets/models/props/Rock_C_02_LOD2.gltf',
    'assets/models/props/Rock_C_03_LOD2.gltf',
    'assets/models/props/Rock_C_04_LOD2.gltf',
    'assets/models/props/Rock_C_05_LOD2.gltf',
    'assets/models/props/Rock_C_06_LOD2.gltf',
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
