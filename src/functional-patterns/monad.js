class MayBe {
  constructor(value) {
    this.value = value;
  }

  static of(value) {
    return new MayBe(value);
  }

  isNothing() {
    return (this.value === null || this.value === undefined);
  }

  map(func) {
    return this.isNothing() ? MayBe.of(null) : MayBe.of(func(this.value));
  }
}

export default {
  MayBe,
};
