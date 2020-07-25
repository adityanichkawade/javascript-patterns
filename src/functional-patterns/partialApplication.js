const partialApplication = (fn, ...args) => (
  (...args1) => (
    fn(...args, ...args1)
  )
);

const partialApplicationRecursive = (fn, ...args) => (...args1) => {
  const totalArgs = [...args, ...args1];
  return fn.length >= totalArgs.length
    ? fn(...args)
    : partialApplicationRecursive(fn, ...totalArgs);
};

export default {
  partialApplication,
  partialApplicationRecursive,
};
