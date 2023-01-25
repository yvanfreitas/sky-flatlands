export default class Eat {
  execute(actor, target) {
    let actorState = actor.getState();
    let targetState = target.getState();

    actorState.hp += targetState.hp;
    actor.setState(actorState);

    target.remove();
    actor.speak('Comi uma ' + target.constructor.name + '!');
    return true;
  }
}
