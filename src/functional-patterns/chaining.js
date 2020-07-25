const chain = (num) => {
  const chaining = {
    value: num,
    add(num1) {
      this.value += num1;
      return this;
    },
    subtract(num1) {
      this.value -= num1;
      return this;
    },
    multiply(num1) {
      this.value *= num1;
      return this;
    },
    divide(num1) {
      this.value /= num1;
      return this;
    },
  };

  return chaining;
};

export default chain;
