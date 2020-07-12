class Iterator {
  constructor() {
    this._index = 0;
    this._items = [];
  }

  hasNext() {
    const { _index, _items } = this;
    return _index < _items.length;
  }

  next() {
    return this.hasNext() ? this._items[this._index++] : null;
  }

  add(item) {
    this._items.push(item);
  }

  first() {
    this._index = 0;
  }
}
