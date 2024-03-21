// Write a Python program to determine whether a given year is a leap year or not.
// let n=100;
// if((n%4==0 && n%100==0) || (n%400==0)){
//     console.log(`this is leap year ${n}`);
// }
// else {
//     console.log(`this is no leap year ${n}`);
// }



// Create an if-elif-else block to determine the grade based on a student’s score (e.g., A for 90-100, B for 80-89, etc.).
// let n=56;
// if(n>=90 || n<=100){
//     console.log("A");
// }
// else if(n>=70 || n<80){
//     console.log("B")
// }
// else if(n>=60 || n<70){
//     console.log("C")
// }
// else if(n>=50 || n<60){
//     console.log("D");
// }
// else {
//     console.log("invalid");
// } 


// Generate the first n prime numbers using a while loop.
// let n=3;
// let i=0;
// let A=[];
// let p=2;
// while(i<n){
//     let j=1;
//     let c=0;
//     let k=Math.sqrt(p);
//     while(j<=k){
//         if(p%j==0){
//             c=c+1;
        
//         }
//         j=j+1
//     }
//     if(c==1){
//         // console.log(p);
//         A.push(p);
//         i=i+1;
//     }
//     p=p+1 
// } 
// console.log(A);  
// console.log(A.join(' '));

// let L = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(L.join(' '));


// Calculate the sum of all even numbers from 1 to 100 using a for loop.  
// let n=100; 
// let s=0;
// for (let i=2;i<=n;i=i+2){
//     s=s+i 
// }
// console.log(s);


// let n="sej"; 

// if (Number.isInteger(n)){
//     console.log("yes");
// }

// else if(String.toString(n)){
//     console.log("string");
// }

// else{
//     console.log("no");
// }

let n=11
if(Number.isInteger(n)){
    console.log('INT');
}
else{
    console.log("NO");
}

// Write a Python function that takes a list of integers as input and returns the product of all positive numbers in the list. 

// let A=[1,3,"45",-8.64] ;
// function checks(A){
//     let s=1 ;
//     for (let i of A){
//         if(Number.isInteger(i)){
//             s=s*i
//         }
//     }
//     return s;
// }
// console.log(checks(A));


// Create a list of fruits and print each fruit in reverse order.
// let B=['banana','Apple','orange','mongo','pineapple'] ;

// let b=B.split('').reversed().join('') ;
// console.log(b);


// Define a tuple containing the names of three programming languages. Print each language name along with its length. 
// let A = ['python', 'java', 'javascript', 'ruby'];
// let di={} 
// for (let i=0;i<A.length;i++){
//     let k=A[i];
//     let l=k.length;
//     di[k]=l;
// }
// console.log(di);

// let b=[1,2,3,4,5]
// let l1=b.length;
// console.log(l1);


// Create a Python function that checks if two sets are disjoint (i.e., have no common elements).  
// let s1=new Set([1,2,3,4,5,6]);
// let s2=new Set([4,5,6,7,8]);
// // new Set([...s1].filter(x => s2.has(x)));
// let m=new Set([...s1].filter(x=>s2.has(x)));
// console.log(m);


// Find the union of two sets containing integers from 1 to 10 and 5 to 15.
// let s1=new Set([1,2,3,4,5,6]);
// let s2=new Set([4,5,6,7,8]);
// let m=new Set([...s1,...s2])
// console.log(m);


// Write a Python program that takes data from an array containing student names and their scores.
//  Calculate the average score for each student and store it in a dictionary.
// let A=[['Alice',[23,45,67]],['Bob',[23,43,23]],['Charlie',[34,56,78]]] 
// let di={}
// for (let i=0;i<A.length;i++){
//     for (let j=0;j<A[i].length;j++){ 
//         let k=A[i][j+1] 
//         let l=k.reduce((x,y)=>x+y) 
//         di[A[i][j]]=l ;
//         break;
//     }
// }
// console.log(di);


// Define a Python function called factorial_recursive that calculates the factorial of a non-negative integer using recursion.
// let n=5;
// function sample(n){
//     if(n==1 || n==0){
//         return 1;
//     }
//     else{
//         return n*(sample(n-1));
//     }
// }
// console.log(sample(n));


// Write a function that takes a list of numbers and returns the maximum value.   

// let A=[1,2,3,4,5,6];

// function greed(A){
//     return()
// }

console.log(2 + "2");
