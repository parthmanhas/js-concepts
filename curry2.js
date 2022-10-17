const curryFn = () => {
    let cache = 0;
    return (arg = 0) => {
        cache += arg;
        return cache;
    }
}

const sum = curryFn();

console.log(sum(1));
console.log(sum(2));
console.log(sum(3));
console.log(sum(4));
console.log(sum());