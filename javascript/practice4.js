// Try to solve this 6 questions for practicing dictionary 
// 1)Define a function to count the frequency of words in a given list of words.
// Example:

// words = ['apple', 'orange', 'banana', 'apple', 'orange', 'apple'] 
// count_word_frequency(words) 
// Output:
//  {'apple': 3, 'orange': 2, 'banana': 1}  

// function sample(words){
//     let di={};
//     for (i of words){
//         if(di[i]){
//             di[i]++;
//         }
//         else{
//             di[i]=1;
//         }
//     }
//     return di 
// }
// console.log(sample(words))  
 
// var x=12;
// var y=8;
// var res=eval("x+y");
// console.log(res);   

// (function(){
//     setTimeout(()=> console.log(1),2000);
//     console.log(2);
//     setTimeout(()=> console.log(3),0);
//     console.log(4);
//    })();
   
// (function(a){
// return (function(){
//   console.log(a);
//    a = 6;
//  })()
// })(21);

// rotation
// method one
// function solve(arr, rotations){
//     if(rotations == 0) return arr;
//     for(let i = 0; i < rotations; i++){
//       let element = arr.pop();
//       arr.unshift(element);
//     }
//     return arr;
//    }
// console.log(solve([44, 1, 22, 111], 3));

// method two 
// let A=[44,1,22,111];
// let k=3 
// for (let i=0;i<k;i++){
//     e=A.pop()
//     A.unshift(e);
// }
// console.log(A);


// console.log(NaN === NaN);

// var a = true + true + true * 3;
// console.log(a);

// let a = [1, 2, 3, 4, 5, 6];
// var left = 0, right = 5;
// var found = false;
// var target = 5;
// while(left <= right) {
//    var mid = Math.floor((left + right) / 2);
//    if(a[mid] == target) {
//        found = true;
//        break;
//    }
//    else if(a[mid] < target) {
//        left = mid + 1;
//    }
//    else {
//        right = mid - 1;
//    }
// }
// if(found) {
//    console.log("YES");
// }
// else {
//    console.log("NO");
// }


// const obj1 = {Name: "Hello", Age: 16};
// const obj2 = {Name: "Hello", Age: 16};
// console.log(obj1 == obj2);

// let s=new Set(); 
// s.add(1);
// s.add(2);
// s.add(3);
// s.add(4);
// console.log(s);

// let m= new Set ([1,2,3]);
// m.add(4);
// m.delete(4);
// console.log(m); 


// let a= new Set([1,2,3,4,5]) 
// function camel(a){
//     if(a.has(4)){
//         return true ;
//     }
//     else{
//         return false;
//     }
// }
// console.log(camel(a));


// Input: Set {1, 2, 3, 4}
// Output: true
// Question: Remove the number 3 from the Set {1, 2, 3, 4}. Show the modified Set


// let s= new Set ([1,2,3,4,5]);
// s.delete(3);
// let m=s.size;
// console.log(m);

// s.clear();
// console.log(s); 


// let p= new Set([1,2,3,4,5,6,7,8]);
// let q=[...p];
// console.log(q);  

let s= new Set([1,2,3,4,5,3,4]) 
let p=[...s]; 
for (let i of s){
    console.log(i);
}

if(s.has(1)){
    console.log(true);
}
else{
    console.log(false);
}
console.log(p);

let m=[1,2,3,4,3,2,1,5,6,7,8,4,3,6,7,8]
let n=new Set(m)
console.log(n);
