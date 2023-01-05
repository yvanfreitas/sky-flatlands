export default class Eat {
  execute(actor, target) {
    actor.state.hp += target.state.hp;
    target.remove();
  }
}
