// Question: Write a function in JavaScript that takes an array of numbers as input and returns a new array where each element is doubled.

// let A=[1,2,3,4,5];
// function sample(x){
//     return x*2;
// } 
// console.log(A.map(sample)); 
// console.log(A.map(x=>x*2));

// // for uppercase latter
// let B=['hello','world','cat','dog'];
// console.log(B.map(x=>x.toUpperCase()));


// // for sum 
// console.log(A.reduce((x,y)=>x+y));

// // for max
// console.log(Math.max(...A));
// console.log(A.reduce((acc,cuuret)=>cuuret>acc? cuuret : acc))  

// function key(a,b){
//     return b>a? b : a
// }
// console.log(A.reduce(key));  



// let fruits=["apple", "banana", "orange"];

// // // Question: Write a function calculateAverageLength in JavaScript that takes an array of strings as 
// // // input and returns the average length of all strings in the array, rounded to the nearest integer. 
// // // You should use the map and reduce functions to calculate the average.   

// // function greed(x){
// //     return x.length;
// // }
// // let b=fruits.map(greed);

// // // console.log(fruits.map(greed)); 
// // let c=(b.reduce((x,y)=>x+y))
// // console.log(Math.round(c/fruits.length));


// function calculateVowelCount(arr) {
//     // Initialize counters for each vowel
//     let counts = { a: 0, e: 0, i: 0, o: 0, u: 0 };

//     // Iterate over each string in the array
//     arr.forEach(str => {
//         // Iterate over each character in the string
//         for (let char of str) {
//             // Check if the character is a vowel
//             if ('aeiou'.includes(char)) {
//                 // Increment the corresponding counter
//                 counts[char]++;
//             }
//         }
//     });

//     return counts;
// }

// // Example usage:
// console.log(calculateVowelCount(["apple", "banana", "orange"]));
// // Expected output: { a: 5, e: 1, i: 0, o: 1, u: 0 }



// function calculateTotalPrice(products) {
//     // Filter out products with quantity greater than 0
//     const validProducts = products.filter(product => product.quantity > 0);
    
//     // Calculate the total price of valid products
//     const totalPrice = validProducts.reduce((total, product) => {
//         return total + (product.price * product.quantity);
//     }, 0);

//     return totalPrice;
// }

// // Example test cases:
// const products1 = [
//   { name: "Apple", price: 1.5, quantity: 2 },
//   { name: "Banana", price: 0.75, quantity: 3 },
//   { name: "Orange", price: 1, quantity: 0 }
// ];
// console.log(calculateTotalPrice(products1)); // Expected output: 5.25

// const products2 = [
//   { name: "Laptop", price: 1000, quantity: 1 },
//   { name: "Mouse", price: 20, quantity: 4 },
//   { name: "Keyboard", price: 50, quantity: 2 }
// ];
// console.log(calculateTotalPrice(products2)); // Expected output: 1090


// Question 1: Implement a function removeConsecutiveDuplicates that removes consecutive duplicates from an array.
// console.log(removeConsecutiveDuplicates([1, 1, 2, 2, 3, 3, 3, 4, 5, 5])); 
// Expected output: [1, 2, 3, 4, 5]
// let a=[1,1,2,2,3,3,4,5,5];
// function sample(x,y){
//     return ((x!=a[y+1]))
// }
// console.log(a.filter(sample));
// console.log(a.filter((x,y)=>x!=a[y+1])); 


// Question2: Write a function findDuplicates that takes an array of numbers as input and returns an array containing only the duplicate elements.
// let a=[1,2,3,2,45,3,2,1];
// function sample(a){
//     let dup=[] 
//     let s=new Set()
//     for (let i of a){
//         if(s.has(i)){
//             dup.push(i)
//         }
//         else{
//             s.add(i);
//         }
//     }
//     return dup
// }
// console.log(sample(a));     


// let arr=([1, [2, [3, 4]], 5])  
// function flattenArray(arr) {
//     return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val), []);
// }  

// console.log(flattenArray(arr));
// function sample(arr){
//     return arr.reduce((a,b)=>a.concat(Array.isArray(b) ? sample(b): b),[])
// }
// console.log(sample(arr)) 


// remove duplicate using filter 
// let a=[1,3,2,4,5,6,4,3,2,1,3];
// a.sort((a,b)=>(a-b));
// let o=a.filter((x,y)=>x!=a[y+1])
// console.log(o);


// Question: Write a function removeFalsyValues that takes an array and removes all falsy values (false, null, 0, "", undefined, and NaN)
// console.log(removeFalsyValues([0, 1, false, true, '', 'hello', undefined, null, NaN])); 
// Expected output: [1, true, 'hello']

// let a=[0, 1, false, true, '', 'hello', undefined, null, NaN]
// console.log(a.filter(Boolean))  


// Question: Write a function shuffleArray that shuffles the elements of an array randomly.
// console.log(shuffleArray([1, 2, 3, 4, 5])); 
// Example output: [3, 2, 5, 1, 4] (random order)
// let m=[1,2,3,4,5,6] 
// for (let i=m.length-1;i>=0;i--){
//     let j=Math.floor(Math.random()*(i+1));
//     [m[i],m[j]]=[m[j],m[i]];
// }
// console.log(m); 


// Question: Implement a function partitionArray that partitions an array into two arrays based on a predicate function.
// const isEven = num => num % 2 === 0;
// console.log(partitionArray([1, 2, 3, 4, 5, 6], isEven)); 
// Expected output: [[2, 4, 6], [1, 3, 5]]
// let arr = [1, 2, 3, 4, 5, 6];

// // Define the predicate function
// function predicate(val) {
//     return val % 2 === 0; // Example predicate: partitions even numbers to the first array, odd numbers to the second array
// }

// // Define the partitionArray function
// function partitionArray(arr, predicate) {
//     return arr.reduce((acc, val) => {
//         acc[predicate(val) ? 0 : 1].push(val);
//         return acc;
//     }, [[], []]);
// }

// // Call partitionArray with the array and the predicate function
// console.log(partitionArray(arr, predicate));


// Question: Write a function uniqueValues that takes two arrays as input and returns an array containing only the unique elements present in both arrays.
// Sample Test Case:
// javascript
// Copy code
// console.log(uniqueValues([1, 2, 3], [2, 3, 4])); 
// Expected output: [2, 3]
// let arr1=[1, 2, 3]
// let arr2=[2, 3, 4] 
// function uniqueValues(arr1, arr2) {
//     const set1 = new Set(arr1);
//     const set2 = new Set(arr2);
//     return Array.from(new Set([...set1].filter(val => set2.has(val))));
// }
// console.log(uniqueValues(arr1,arr2));  


// Question: Implement a function chunkArray that splits an array into chunks of a specified size.
// Sample Test Case:
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3)); 
// Expected output: [[1, 2, 3], [4, 5, 6], [7]] 
// function chunkArray(arr, size) {
//     const result = [];
//     for (let i = 0; i < arr.length; i += size) {
//         result.push(arr.slice(i, i + size));
//     }
//     return result;
// }

