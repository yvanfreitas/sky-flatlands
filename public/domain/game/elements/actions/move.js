import Status from '../status.js';
export default class Move {
  path = [];
  finder = null;
  destination = { x: 0, y: 0 };
  position = { x: 0, y: 0 };
  myself = null;
  target = null;
  blockedCount = 0;
  //speed = 1;

  constructor() {
    this.path = [];
    this.finder = new PF.AStarFinder();
  }
  run(myself) {
    this.myself = myself;
    this.position = myself.state.position;

    let movements = 0;
    while (movements < this.myself.state.speed) {
      let inDestination =
        this.position?.x == this.destination?.x && this.position?.y == this.destination?.y;
      if (inDestination) {
        this.clearDestination();
      } else {
        if (this.path.length >= 1) {
          this.doMovement();
        } else {
          this.traceAPath();
        }
      }
      movements++;
      myself.state.position = this.position;
      myself.state.destination = this.destination;
    }
  }
  setDestination(position) {
    if (position != undefined) {
      this.destination = position;
    } else {
      this.destination = window.core?.map?.find.randomClearLocation(position, 20);
    }
    this.traceAPath();
  }
  setStaticTarget(position) {
    if (position == undefined) {
      return;
    }
    this.destination = position;
    this.traceAPath();
    if (this.path.length <= 0 || this.path == undefined) {
      return;
    }
    this.destination.x = this.path[this.path.length - 1][0];
    this.destination.y = this.path[this.path.length - 1][1];
    this.path.pop();
  }
  traceAPath() {
    if (this.destination == undefined || this.position == undefined) return;
    this.myself.speak(
      'Saindo de: ' +
        this.position?.x +
        ',' +
        this.position?.y +
        ' para: ' +
        this.destination?.x +
        ',' +
        this.destination?.y +
        '!',
    );
    let grid = window.core?.map?.grid;
    if (grid == undefined) {
      return;
    }
    var pathFinderGrid = new PF.Grid(grid);
    var pathFinder = new PF.BestFirstFinder({
      allowDiagonal: true,
      dontCrossCorners: true,
      heuristic: PF.Heuristic.euclidean,
    });
    this.path = pathFinder.findPath(
      this.position.x,
      this.position.y,
      this.destination.x,
      this.destination.y,
      pathFinderGrid,
    );
    this.path.shift();
  }
  doMovement() {
    let newPosition = {
      x: this.path[0][0],
      y: this.path[0][1],
    };

    let movementDone = window.core?.map?.moveElement(this.myself, newPosition);
    if (movementDone) {
      this.position = newPosition;
      this.path.shift();
      this.blockedCount = 0;
      // this.myself.speak('Andei em: ' + this.position.x + ',' + this.position.y + '!');
    } else {
      this.blockedCount++;
      if (this.blockedCount == 9) {
        this.myself.speak(
          'O caminho está obstruido. Terei que achar outra rota! ' + this.blockedCount,
          console.log(
            this.myself.id +
              ' - ' +
              this.myself.state.position.x +
              ',' +
              this.myself.state.position.y +
              ' | ' +
              this.blockedCount,
          ),
        );
        this.traceAPath();
      }
      if (this.blockedCount >= 10) {
        this.myself.speak('Não consigo chegar no meu destino. Deixa pra lá! ' + this.blockedCount);
        this.myself.state.status = Status.Stopped;
        this.clearDestination();
        this.blockedCount = 0;
      }
    }
  }
  haveAValidPosition() {
    return this.position?.x != undefined && this.position?.y != undefined;
  }
  haveAValidDestination() {
    return (
      this.destination?.x != undefined &&
      this.destination?.y != undefined &&
      this.destination?.x != null &&
      this.destination?.y != null
    );
  }
  clearDestination() {
    this.destination = null;
  }
}
