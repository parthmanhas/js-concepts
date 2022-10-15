const flatten = (arr) => {
    const res = [];
    helper(arr, res);
    return res;
}

const helper = (arr, res) => {
    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            helper(arr[i], res);
        } else {
            res.push(arr[i]);
        }
    }
}

const arr = [1,2,3,4,[5,6,7, [8,9, [10]]]];
const res = flatten(arr);
// console.log(res);

const flattenReduce = (arr) => {
    return arr.reduce((prev, curr) => {
        if(Array.isArray(curr)) {
            prev = prev.concat(flattenReduce(curr));
        } else {
            prev.push(curr);
        }
        return prev;
    }, []);
}

const arr1 = [1,2,3,4,[5,6,7, [8,9, [10]]]];
const res1 = flattenReduce(arr);
console.log(res1);

