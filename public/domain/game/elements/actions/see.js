export default class See {
  inSight = [];

  run(myself) {
    this.inSight = window.core?.map?.find.elementsAround(
      myself.state.position,
      myself.state.viewRange,
    );
  }
  whereIs(type) {
    let elements = [];
    elements = this.inSight?.filter((element) => element.types.includes(type));
    if (elements?.length <= 0 || elements == undefined) {
      return null;
    } else {
      return elements[0];
    }
  }
}
