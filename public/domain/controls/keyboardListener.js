export default class KeyboardListener {
  constructor(document) {
    this.state = {
      observers: [],
    };

    document.addEventListener('keydown', this.handleKeydown.bind(this));
  }

  subscribe(observerFunction) {
    this.state.observers.push(observerFunction);
  }

  notifyAll(command) {
    for (const observerFunction of this.state.observers) {
      observerFunction(command);
    }
  }

  handleKeydown(event) {
    const keyPressed = event.key;

    let command = {
      type: 'keyboard-press',
      keyPressed: keyPressed,
    };

    this.notifyAll(command);
  }
}
