import Feelings from '../feelings.js';
import Status from '../status.js';
import Types from '../Types.js';
import { See, Move, Eat } from '../actions.js';

export default class Think {
  myself;
  run(myself) {
    this.myself = myself;
    this.statusHandler(this.myself.state.status);
    myself.state.feelings.forEach((feeling) => {
      this.feelingsHandler(feeling);
    });
  }
  feelingsHandler(feeling) {
    switch (feeling) {
      case Feelings.Hungry:
        this.hungryHandler();
        break;
      default:
        this.myself.speak('Eu não sei lidar com esse sentimento ' + feeling + '!');
        break;
    }
  }
  statusHandler(status) {
    switch (status) {
      case Status.Stopped:
        this.stoppedHandler();
        break;
      case Status.Wandering:
        this.wanderingHandler();
        break;
      default:
        this.myself.speak('Eu não sei lidar com esse status ' + status + '!');
        break;
    }
  }
  hungryHandler() {
    let indexOfSee = this.myself.runningActions.findIndex((action) => action instanceof See);
    let indexOfMove = this.myself.runningActions.findIndex((action) => action instanceof Move);
    let food = this.myself.runningActions[indexOfSee].whereIs(Types.Food);

    if (food == undefined) {
      return;
    }

    if (
      this.myself.state.target == null ||
      this.myself.state.target == undefined ||
      this.myself.state.target != food
    ) {
      this.myself.state.target = food;
      this.myself.runningActions[indexOfMove].setStaticTarget(food.state.position);
      return;
    }

    let distanceToFood = window.core.map.find.distance(
      this.myself.state.position,
      food.state.position,
    );

    if (distanceToFood <= 2) {
      let indexOfEat = this.myself.activeActions.findIndex((action) => action instanceof Eat);
      let result = this.myself.activeActions[indexOfEat].execute(this.myself, food);
      if (result) {
        this.myself.state.target = null;
        this.myself.runningActions[indexOfMove].clearDestination();
        this.myself.state.status = Status.Stopped;
      }
    }
  }
  stoppedHandler() {
    this.myself.state.status = Status.Wandering;
  }
  wanderingHandler() {
    let indexOfMove = this.myself.runningActions.findIndex((action) => action instanceof Move);
    let haveAValidDestination = this.myself.runningActions[indexOfMove].haveAValidDestination();
    if (haveAValidDestination) return;
    this.myself.runningActions[indexOfMove].setDestination();
  }
}
