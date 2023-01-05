export default class Move {
  path = [];
  finder = null;

  constructor() {
    this.path = [];
    this.finder = new PF.AStarFinder();
  }
  run(myself) {
    if (!this.haveAValidPosition(myself) || !this.haveAValidDestination(myself)) {
      myself.teleport();
      myself.setDestination();
      return;
    }

    if (this.path.length >= 1) {
      this.doMovement(myself);
      return;
    }

    let isInTheDestination =
      myself.state.position?.x == myself.state.destination?.x &&
      myself.state.position?.y == myself.state.destination?.y;
    if (isInTheDestination) {
      myself.setDestination();
      return;
    }

    if (!isInTheDestination && this.path.length == 0) {
      this.traceAPath(myself);
    }
  }

  traceAPath(myself) {
    myself.speak(
      'Saindo de: ' +
        myself.state.position?.x +
        ',' +
        myself.state.position?.y +
        ' para: ' +
        myself.state.destination?.x +
        ',' +
        myself.state.destination?.y +
        '!',
    );
    let grid = window.core?.map?.grid;
    if (grid == undefined) {
      return;
    }
    var pathFinderGrid = new PF.Grid(grid);
    var pathFinder = new PF.AStarFinder({
      diagonalMovement: PF.DiagonalMovement.Always,
    });
    this.path = pathFinder.findPath(
      myself.state.position.x,
      myself.state.position.y,
      myself.state.destination.x,
      myself.state.destination.y,
      pathFinderGrid,
    );
    this.path.shift();
  }
  doMovement(myself) {
    let newPosition = {
      x: this.path[0][0],
      y: this.path[0][1],
    };

    let result = window.core?.map?.moveElement(myself, newPosition);
    if (result) {
      myself.state.position = newPosition;
      this.path.shift();
      //myself.speak('Andei em: ' + myself.state.position.x + ',' + myself.state.position.y + '!');
    } else {
      myself.speak('O caminho está obstruido. Terei que achar outra rota!');
      this.traceAPath(myself);
    }
  }
  haveAValidPosition(myself) {
    return myself.state.position?.x != undefined && myself.state.position?.y != undefined;
  }
  haveAValidDestination(myself) {
    return myself.state.destination?.x != undefined && myself.state.destination?.y != undefined;
  }
}
