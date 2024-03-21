// Object.assign()

let a={a:2,b:4,c:4,f:8}
let b={c:3,d:5,e:7}

let result1=Object.assign(a,b);
console.log(result1);


// Define source objects
const source1 = { a: 1, b: 2 };
const source2 = { b: 3, c: 4 };
// Define target object
const target = { c: 5, d: 6 };
// Use Object.assign() to copy properties from source objects to target object
const result = Object.assign(target, source1, source2);
console.log(result); // Output: { c: 4, d: 6, a: 1, b: 3 }


