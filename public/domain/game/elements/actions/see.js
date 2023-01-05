export default class See {
  inSight = [];

  run(myself) {
    this.inSight = window.core?.map?.find.elementsAround(
      myself.state.position,
      myself.state.viewRange,
    );
    myself.speak(this.inSight);
  }
}
