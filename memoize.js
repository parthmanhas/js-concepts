const add = (a, b) => a + b;

const memoize = (fn) => {
  const memo = {};
  return function (...args) {
    const argsToString = JSON.stringify(args);
    if (memo[argsToString]) {
        console.log(`return memoized value ${argsToString}`)
      return memo[argsToString];
    }
    memo[argsToString] = fn.apply(this, args);
    return memo[argsToString];
  };
};

const addMemoized = memoize(add);

const factorial = memoize(n => {
    if(n === 1) return 1;
    return n * factorial(n-1);
});

console.log(factorial(4))
console.log(factorial(4))
console.log(factorial(5))
