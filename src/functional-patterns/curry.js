const curry = (func) =>
  function curried(...args) {
    return func.length <= args.length
      ? func.apply(this, args)
      : (...args1) => curried.apply(this, args.concat(args1));
  };

export default curry;