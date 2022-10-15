const flattenObject = (obj, parent) => {
    const res = {};
    const helper = (obj, parent) => {
        for(let key in obj) {
            const newParent = parent + key;
            const val = obj[key];
            if(typeof val === 'object') {
                helper(val, newParent + '.');
            } else {
                res[newParent] = val;
            }
        }
    }
    helper(obj, parent);
    return res;

}


//question
const obj = {
    A: "12",
    B: 23,
    C: {
        P: 23,
        O: {
            L: 56
        },
        Q: [1,2]
    }
};
console.log(flattenObject(obj, ""));

//answer
// {
//     A: "12",
//     B: 23,
//     C.P: 23,
//     C.O.L: 56,
//     C.Q.0 : 1,
//     C.Q.1 : 2
// }