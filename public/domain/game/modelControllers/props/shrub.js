import ModelController from '../modelController.js';

export default class ShrubController extends ModelController {
  minScale = 4.1;
  maxScale = 6.4;
  scale = Math.random() * (this.maxScale - this.minScale) + this.minScale;
  models = [
    'assets/models/props/Shrub_Btm_A_01_LOD2.gltf',
    'assets/models/props/Shrub_Btm_A_02_LOD2.gltf',
    'assets/models/props/Shrub_Btm_A_03_LOD2.gltf',
    'assets/models/props/Shrub_Btm_B_01_LOD2.gltf',
    'assets/models/props/Shrub_Btm_B_02_LOD2.gltf',
    'assets/models/props/Shrub_Btm_B_03_LOD2.gltf',
    'assets/models/props/Shrub_Top_A_01_LOD2.gltf',
    'assets/models/props/Shrub_Top_A_02_LOD2.gltf',
    'assets/models/props/Shrub_Top_A_03_LOD2.gltf',
    'assets/models/props/Shrub_Top_B_01_LOD2.gltf',
    'assets/models/props/Shrub_Top_B_02_LOD2.gltf',
    'assets/models/props/Shrub_Top_B_03_LOD2.gltf',
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
