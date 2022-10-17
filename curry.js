const ARGS_LEN = 5;

const sum = (...args) => {
    if(args.length === ARGS_LEN) return args.reduce((initialVal, currentVal) => initialVal + currentVal, 0);
    else {
        const recursive = (...args2) => {
            args = args.concat(args2);
            if(args.length === ARGS_LEN) return args.reduce((initialVal, currentVal) => initialVal + currentVal, 0);
            return recursive;
        }
        return recursive
    }
}

console.log(sum(1,2,3,4,5))
console.log(sum(1)(2,3,4,5))
console.log(sum(1,2)(3,4,5))
console.log(sum(1,2,3)(4,5))
console.log(sum(1,2,3,4)(5))
console.log(sum(1)(2)(3)(4)(5))