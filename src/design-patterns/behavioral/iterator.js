class Iterator {
  constructor() {
    this.itemIndex = 0;
    this.items = [];
  }

  hasNext() {
    const { _index, _items } = this;
    return _index < _items.length;
  }

  next() {
    this.itemIndex += 1;
    return this.hasNext() ? this.items[this.itemIndex] : null;
  }

  add(item) {
    this.items.push(item);
  }

  first() {
    this.itemIndex = 0;
  }
}

export default Iterator;
