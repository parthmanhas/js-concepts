const add = (a, b) => a + b;

const memoize = (fn) => {
  const memo = {};
  return function (...args) {
    const argsToString = JSON.stringify(args);
    if (memo[argsToString]) {
        console.log('return memoized value')
      return memo[argsToString];
    }
    memo[argsToString] = fn.apply(null, args);
    return memo[argsToString];
  };
};

const addMemoized = memoize(add);

console.log(addMemoized(2, 9));
console.log(addMemoized(2, 9));
