/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
class SimpleButton {
  constructor(config) {
    this.config = config;
  }

  draw() {
    console.log('Drawing Simple Button');
  }
}

class RoundedButton {
  constructor(config) {
    this.config = config;
  }

  draw() {
    console.log('Drawing Rounded Button');
  }
}

class FlatButton {
  constructor(config) {
    this.config = config;
  }

  draw() {
    console.log('Drawing Flat Button');
  }
}

class ButtonsFactory {
  constructor() {
    this.buttons = {
      Rounded: (config) => new RoundedButton(config),
      Flat: (config) => new FlatButton(config),
      Simple: (config) => new SimpleButton(config),
    };
  }

  createButton(type, config) {
    const buttonType = this.buttons[type];
    return buttonType ? buttonType(config) : null;
  }
}

export default ButtonsFactory;
