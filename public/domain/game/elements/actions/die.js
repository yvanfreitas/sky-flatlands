export default class Die {
  run(myself) {
    if (myself.state.age > myself.state.lifespan) {
      myself.speak("Shit, I'm dead");
      clearInterval(myself.life);
    }
  }
}
