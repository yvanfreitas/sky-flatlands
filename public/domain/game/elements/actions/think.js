import Feelings from '../feelings.js';
import Types from '../Types.js';
import { See, Move, Eat } from '../actions.js';

export default class Think {
  run(myself) {
    myself.state.feelings.forEach((feeling) => {
      this.feelingsHandler(myself, feeling);
    });
  }
  feelingsHandler(myself, feeling) {
    switch (feeling) {
      case Feelings.Hungry:
        this.hungryHandler(myself);
        break;
      default:
        myself.speak('Eu não sei lidar com esse sentimento ' + feeling + '!');
        break;
    }
  }
  hungryHandler(myself) {
    let indexOfSee = myself.runningActions.findIndex((action) => action instanceof See);
    let indexOfMove = myself.runningActions.findIndex((action) => action instanceof Move);
    let food = myself.runningActions[indexOfSee].whereIs(Types.Food);

    if (food == undefined) {
      return;
    }

    if (
      myself.state.target == null ||
      myself.state.target == undefined ||
      myself.state.target != food
    ) {
      myself.state.target = food;
      myself.runningActions[indexOfMove].setStaticTarget(food.state.position);
      return;
    }

    let distanceToFood = window.core.map.find.distance(myself.state.position, food.state.position);

    if (distanceToFood <= 2) {
      let indexOfEat = myself.activeActions.findIndex((action) => action instanceof Eat);
      let result = myself.activeActions[indexOfEat].execute(myself, food);
      if (result) {
        myself.state.target = null;
        myself.runningActions[indexOfMove].destination = myself.state.position;
      }
    }
  }
}
