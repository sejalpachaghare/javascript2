const input=require("readline-sync");
let a=input.question("enter string: ");

// reverse 
// let b=a.length
// let c=' '
// for (let i=b-1;i>=0;i--){
//     c+=a[i] 
// }
// console.log(c);
// let z=a.split('').reverse().join('');
// console.log(z);
// let d=a.split('').reverse().join('');
// console.log(d);
// // replace 
// let e=a.replace('s','b');
// console.log(e);

let f=a.replace(/\s/g, '');
console.log(f);  


// reverse function 
// function rev(a){
//     return(a.split('').reverse().join(''))
// }
// console.log(rev(a));


// let a=[10,2,3,4,5];

// function sumdry(a){
//     let s=0;
//     for (i of a){
//         s+=i;
//     }
//     return s;
// }

// console.log(sumdry(a));

// function sample(x,y){
//     x=x+y 
//     return x;
// }
// let z=a.reduce(sample);
// console.log(z);


//  if the string is a palindrome, and false otherwise.
// let str="sejal" 
// function palindrome(str){
//     let a=str.split('').reverse().join('');
//     if(str===a){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(palindrome(str));  


// takes two arrays as input and returns a new array containing elements that are present in both arrays.

// let a=[1,2,3,4];
// let b=[3,4,5,6];

// function both(a,b){
//     let c=[] 
//     for (let i=0;i<a.length;i++){
//          for(let j=0;j<b.length;j++){
//             if(a[i]==b[j]){
//                 c.push(a[i])
//             }
//          }   
//     }
//     return c;
// }
// // console.log(both(a,b))  

// function both2(a,b){
//     return a^b ;
// }

// console.log(both2(a,b)); 

// let c=97;
// function prime(c){
//     count=1 
//     let d=Math.sqrt(c);   
//     for (let i=1;i<=d;i++){
//         if(c%i==0){
//             count++;
//         }
//     }
//     if(count>2)
//         return false;
//     else 
//         return true;
// }
// console.log(prime(c))

// let a=['Apple','Banana','Orange','Pineapple','tomato'];

// let m=0;
// for (let i=0;i<a.length;i++){
//     let b=a[i];
//     let c=b.split('');
//     let d=c.length;
//     if(d>m){
//         m=d;
//     }
// }
// console.log(m);


// Question: Implement a function that takes a sentence as input and returns the number of vowels (a, e, i, o, u) in the sentence.
// Sample Input: "This is a sample sentence."
// Sample Output: 7

// let s="This is a sample sentence.";
// let p=s.split('')
// let c=0;

// let m=['a','e','i','o','u'];
// let n=['A','E','I','O','U'];

// for(let i=0;i<p.length;i++){
//     for (let j=0;j<m.length;j++){
//         if(p[i]==m[j] || p[i]==n[j]){
//             c++;
//         }
//     }
// }
// console.log(c); 


// Question: Create a function that takes a string as input and returns the string with all vowels replaced by asterisks (*).
// Sample Input: "hello world"
// Sample Output: "h*ll* w*rld"  

// let str='hello world';
// let p=str.split('');
// let q=''
// for (let i=0;i<p.length;i++){
//     if(p[i]=='A' || p[i]=='E' || p[i]=='I' || p[i]=='O' || p[i]=='U'){
//         q=q+'*';
//     }
//     if(p[i]=='a' || p[i]=='e' || p[i]=='i' || p[i]=='o' || p[i]=='u'){
//         q=q+'*';
//     }
//     else{
//         q=q+p[i];
//     }
// }  
// console.log(q); 

// Question: Write a function that takes an array of numbers as input and returns a new array containing only the even numbers from the input array.
// Sample Input: [1, 2, 3, 4, 5, 6]
// Sample Output: [2, 4, 6]  

// let a=[1,2,3,4,5,6,8,10];
// function even(a){
//     a=a%2==0;
//     return a;
// }
// console.log(a.filter(even)); 


// Question: Implement a function that takes a string as input and returns the frequency of each character in the string as an object.
// Sample Input: "hello"
// Sample Output: {h: 1, e: 1, l: 2, o: 1} 

// let str='hello' ;

// function sample(str){
//     let p=str.split('');
//     for (let i=0;i<p.length();i++){

//     }
// }
// console.log(sample(str)) 


// function characterFrequency(str) {
//     // Initialize an empty object to store character frequencies
//     let frequency = {};

//     // Loop through each character in the string
//     for (let char of str) {
//         // If the character is already in the frequency object, increment its count
//         if (frequency[char]) {
//             frequency[char]++;
//         } 
//         // If the character is not in the frequency object, initialize its count to 1
//         else {
//             frequency[char] = 1;
//         }
//     }
//     console.log(frequency);
//     return frequency;
// }
// let inputString = "hello";
// let output = characterFrequency(inputString);
// console.log(output); // Output: {h: 1, e: 1, l: 2, o: 1}  


// let arr=[1,2,3,4,5,6,7];

// function sumall(x,y){
//     x=x+y 
//     return x;
// }
// console.log(arr.reduce(sumall));   


// let n=5;
// function factorial(n){
//     if(n==1||n==0){
//         return 1;
//     }
//     return n*(factorial(n-1));
// }
// console.log(factorial(n));   


// Question: Write a JavaScript program to generate Fibonacci series up to a given number using a loop.
// Sample Input: num = 10
// Sample Output: Fibonacci series up to 10: 0, 1, 1, 2, 3, 5, 8    
// let n=10;
// function series(n){
//     let A=[0,1];
//     for (let i=0;i<n-2;i++){
//         s=A[i]+A[i+1];
//         A.push(s);
//     }
//     return A;
// }
// console.log(series(n));


// Question: Write a JavaScript program to count the number of digits in a given number using a loop.
// Sample Input: num = 12345
// Sample Output: The number of digits in 12345 is 5   

let m=12345 
let k=m.toString()
let l=k.length;
// console.log(l);

// Question: Write a JavaScript program to reverse a given number using a loop.
// Sample Input: num = 12345
// Sample Output: Reversed number of 12345 is 54321   

let o=12345;
let p=o.toString() 
let v=p.split('').reverse().join('')
// console.log(v);


let A = [1, 2, 3, 4, 5, 6, 7, 8];
let result = A.join(" ");
// console.log(result); // Output: "1 2 3 4 5 6 7 8"


// Question: Write a JavaScript program to find the sum of digits of a given number using a loop.
// Sample Input: num = 12345
// Sample Output: The sum of digits of 12345 is 15  

let n=123456 

function numbers(n){
    a=[]
    while(n>0){
        a.unshift(n%10);
        n=Math.floor(n/10)  
    }
    return(a.reduce((x,y)=>x+y,0))
}
console.log(numbers(n))  


// while (number > 0) {
//     digitsArray.unshift(number % 10);
//     number = Math.floor(number / 10);
// }

function characterFrequency(str) {
    let frequency = {};

    for (let char of str) {
        if (frequency[char]) {
            frequency[char]++;
        } else {
            frequency[char] = 1;
        }
    }

    return frequency;
}

let inputString5 = "hello";
let output5 = characterFrequency(inputString5);
console.log(output5); // Output: {h: 1, e: 1, l: 2, o: 1}


// const input=require("readline-sync");
// let a=input.question("enter numner: ");

// const input=require("readline-sync");
// let q=input.question("enter number: ");
// console.log(q);

