// let A=[1,2,3,4,5];
// let n=2;
// let l=(A.length)
// let m=l-n 
// let k=A.slice(m,l)
// console.log(k) 


// let myColor = ["Red", "Green", "White", "Black"];
// let k=myColor.join(",")
// console.log(k);


// let a=2434568;
// let A=a.toString().split("");
// for (let i=0;i<(A.length)-1;i++){
//     if(A[i]%2===0 && A[i+1]%2===0){

//         A.splice(i+1,0,'-');  // Insert hyphen between consecutive even digits
//     }
// }
// console.log(A.join(""));


// var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// for (let i=0;i<a.length;i++){
//     console.log(`row ${i}`);
//     for (let j=0;j<a[i].length;j++){
//         console.log(a[i][j]);
//     }
// }


// let array1 = [3,5,6,7,8,13]; 
// let array2 = [1,0,2,3,4];
// let arr=[]

// let m=Math.max(array1.length,array2.length) 
// for (let i=0;i<m;i++){
//     if(i<array1.length){
//         if(i<array2.length)
//             arr.push(array1[i]+array2[i]);
//         else{
//             arr.push(array1[i]+0);
//         }
//     }
//     else{
//         if(i<array2.length)
//             arr.push(0+array2[i]); 

//     }
// }
// console.log(arr) 


// console.log(num_string_range('a', "z", 2));
// ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]  
// let a1=1;
// let a2=15;
// let n=2 ;
// result=[];
// if((typeof(a1)==='string') && (typeof(a2)==='string')){
//    for(let i=a1.charCodeAt(0);i<=a2.charCodeAt(0);i=i+n){
//     result.push(String.fromCharCode(i));
//    } 
// }
// else if((typeof(a1)=='number') && (typeof(a2)==='number')){
//     for(let i=a1;i<=a2;i=i+n){
//     result.push(i);
//    } 
// }
// console.log(result);


// function move(arr, from, to) {
//     // If either `from` or `to` is out of range, return the original array
//     if (from < 0 || from >= arr.length || to < 0 || to >= arr.length) {
//         return arr;
//     }

//     // Remove the element from `from` index and store it
//     let element = arr.splice(from, 1)[0];

//     // Insert the element at `to` index
//     arr.splice(to, 0, element);

//     return arr;
// }
// console.log(move([10, 20, 30, 40, 50], 0, 2));  // Output: [20, 30, 10, 40, 50]
// console.log(move([10, 20, 30, 40, 50], -1, -2)); // Output: [10, 20, 30, 50, 40]


// function permute(nums) {
//     if (nums.length === 1) return [nums];

//     let permutations = [];

//     for (let i = 0; i < nums.length; i++) {
//         const currentNum = nums[i];
//         const remainingNums = nums.slice(0, i).concat(nums.slice(i + 1));
//         const innerPermutations = permute(remainingNums);

//         for (let j = 0; j < innerPermutations.length; j++) {
//             permutations.push([currentNum].concat(innerPermutations[j]));
//         }
//     }

//     return permutations;
// }

// console.log(permute([1, 33, 5]));
// console.log(permute([1, 3, 5, 7]));
// console.log(permute([2, 4]));


let A=[2,4,1,3,2,5];
A.sort((a,b)=>(a-b));
let p= new Set(A);
let q=[...p];
console.log(q);  

// ([2, NaN, 8, 16, 32]) -> [1]