class SimpleButton {
  constructor(config) {
    this.config = config;
  }
  draw() {
    console.log("Drawing Simple Button");
  }
}

class RoundedButton {
  constructor(config) {
    this.config = config;
  }
  draw() {
    console.log("Drawing Rounded Button");
  }
}

class FlatButton {
  constructor(config) {
    this.config = config;
  }
  draw() {
    console.log("Drawing Flat Button");
  }
}

class ButtonsFactory {
  constructor() {
    this.buttons = {
      Rounded: () => new RoundedButton(config),
      Flat: () => new FlatButton(config),
      Simple: () => new SimpleButton(config),
    };
  }
  createButton(type) {
    const buttonType = this.buttons[type];
    return buttonType ? buttonType() : null;
  }
}
