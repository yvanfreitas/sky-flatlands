export default class Eat {
  execute(actor, target) {
    actor.state.hp += target.state.hp;
    target.remove();
    console.log(window.core.elements.indexOf(actor) + 'comeu');
    return true;
  }
}
