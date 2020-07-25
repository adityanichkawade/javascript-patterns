const Functor = (aValue) => (
  {
    value: aValue,
    map: (func) => Functor(func(aValue)),
  }
);

export default Functor;
