// 1. **Question:** Write a function `flattenObject` that takes a nested object as input and returns a flattened object
//  where the keys are composed using dot notation.
//    **Sample Test Case:**
//    ```javascript
//    console.log(flattenObject({ a: { b: { c: 1 } }, d: 2 }));
//    // Expected output: { 'a.b.c': 1, d: 2 }  
// let obj={ a: { b: { c: 1 } }, d: 2 }
// function flattenObject(obj) {
//     const result = {};
//     function flatten(obj, prefix = '') {
//         for (let key in obj) {
//             if (typeof obj[key] === 'object') {
//                 flatten(obj[key], prefix ? prefix + '.' + key : key);
//             } else {
//                 result[prefix ? prefix + '.' + key : key] = obj[key];
//             }
//         }
//     }
//     flatten(obj);
//     return result;
// }
// console.log(flattenObject(obj));


// 2. **Question:** Implement a function `removeDuplicates` that takes an array of objects and removes duplicate objects based on a specified key.

//    **Sample Test Case:**
//    ```javascript
//    const arr = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 1, name: 'John' }];
//    console.log(removeDuplicates(arr, 'id'));
//    // Expected output: [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]    
const arr = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 1, name: 'John' }];  
let uni=[] ;
let result=[];

for (let i of arr){
    let k=i.id
    if(!uni.includes(k)){
        uni.push(k)
        result.push(i)
    }
}
console.log(result);


// 3. **Question:** Write a function `groupByKey` that takes an array of objects and groups them by a specified key, 
// returning an object where the keys are unique values of the specified key and the values are arrays of objects with that key.

//    **Sample Test Case:**
//    ```javascript
//    const arr = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 1, name: 'Alex' }];
//    console.log(groupByKey(arr, 'id'));
//    // Expected output: { 1: [{ id: 1, name: 'John' }, { id: 1, name: 'Alex' }], 2: [{ id: 2, name: 'Jane' }] }
// const arr = [
//     { id: 1, name: 'John' },
//     { id: 2, name: 'Jane' },
//     { id: 1, name: 'John' }
// ];

// function groupByKey(arr, key) {
//     return arr.reduce((acc, obj) => {
//         const val = obj[key];
//         acc[val] = acc[val] || [];
//         acc[val].push(obj);
//         return acc;
//     }, {});
// }

// console.log(groupByKey(arr,key));   


// 4. **Question:** Implement a function `deepClone` that performs a deep copy of a nested object.

//    **Sample Test Case:**
//    ```javascript
//    const obj = { a: { b: { c: 1 } } };
//    const clone = deepClone(obj);
//    console.log(clone);
//    // Expected output: { a: { b: { c: 1 } } }  
// function deepClone(obj) {
//     return JSON.parse(JSON.stringify(obj));
// }


// 5. **Question:** Write a function `sortByValue` that takes an object as input and returns a new object with keys sorted by their corresponding values.

//    **Sample Test Case:**
//    ```javascript
//    console.log(sortByValue({ a: 3, b: 1, c: 2 }));
//    // Expected output: { b: 1, c: 2, a: 3 }

// function sortByValue(obj) {
//     return Object.fromEntries(Object.entries(obj).sort((a, b) => a[1] - b[1]));
// }


// 6. **Question:** Implement a function `omitKeys` that takes an object and an array of keys to omit, and returns a new object with the specified keys removed.

//    **Sample Test Case:**
//    ```javascript
//    console.log(omitKeys({ a: 1, b: 2, c: 3 }, ['b', 'c']));
//    // Expected output: { a: 1 } 
// function omitKeys(obj, keys) {
//     return Object.fromEntries(Object.entries(obj).filter(([key]) => !keys.includes(key)));
// }


// 7. **Question:** Write a function `countValues` that takes an array as input and returns an object containing the count of each unique value in the array.

//    **Sample Test Case:**
//    ```javascript
//    console.log(countValues(['a', 'b', 'a', 'c', 'b', 'a']));
//    // Expected output: { a: 3, b: 2, c: 1 }  
// function countValues(arr) {
//     return arr.reduce((acc, val) => {
//         acc[val] = (acc[val] || 0) + 1;
//         return acc;
//     }, {});
// }


// 8. **Question:** Implement a function `isObjectEmpty` that takes an object as input and returns `true` if the object contains no enumerable properties, otherwise `false`.

//    **Sample Test Case:**
//    ```javascript
//    console.log(isObjectEmpty({})); // Expected output: true
//    console.log(isObjectEmpty({ a: 1 })); // Expected output: false
// function isObjectEmpty(obj) {
//     return Object.keys(obj).length === 0;
// }


// 9. **Question:** Write a function `capitalizeKeys` that takes an object as input and returns a new object with all keys capitalized.

//    **Sample Test Case:**
//    ```javascript
//    console.log(capitalizeKeys({ a: 1, b: 2, c: 3 }));
//    // Expected output: { A: 1, B: 2, C: 3 }  

// let obj={ a: 1, b: 2, c: 3 }
// function capitalizeKeys(obj) {
//     return Object.fromEntries(Object.entries(obj).map(([key, val]) => [key.toUpperCase(), val]));
// }
// console.log(capitalizeKeys(obj));  

// let b=Object.fromEntries(Object.entries(obj).map(([key,val])=>[key.toUpperCase(),val]));       
// console.log(b);


// 10. **Question:** Implement a function `getRandomKey` that takes an object as input and returns a randomly selected key from the object.

//    **Sample Test Case:**
//    ```javascript
// const obj = { a: 1, b: 2, c: 3 };
// //    console.log(getRandomKey(obj));
//    // Expected output: 'a', 'b', or 'c' (randomly selected)  
// function getRandomKey(obj) {
//     const keys = Object.keys(obj);
//     return keys[Math.floor(Math.random() * keys.length)];
// }
// console.log(getRandomKey(obj));

