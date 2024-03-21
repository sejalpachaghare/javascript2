// count vowel
// let A=['apple','banana','orange','mongo'];

// function sample(A){
//     let obj={a:0,e:0,i:0,o:0,u:0};

//     for (let i of A){
//         let k=i;
//         for (let j=0;j<k.length;j++){
//             let x=k[j]
//             if('aeiou'.includes(x)){
//                 obj[x]++;
//             }
//         }
//     }
//     return obj;
// }
// console.log(sample(A));


// const products1 = [
//     { name: "Apple", price: 1.5, quantity: 2 },
//     { name: "Banana", price: 0.75, quantity: 3 },
//     { name: "Orange", price: 1, quantity: 0 }
//   ]; 

// function sample(x, y){
//     return x+(y.price * y.quantity);
// }
// console.log(products1.reduce(sample,0)); 
// let total=0
// for (let i of products1){
//     total=total+(i.price*i.quantity);
// }
// console.log(total);


// let a=[1,3,4,2,5,6,7,8,2,8,5];
// a.sort() 
// let b=a.filter((x,y)=>x!=a[y+1]);
// console.log(b);


// let A=[1,2,2,3,3,4,5,4];
// A.sort()
// let s=new Set([])
// let dup=[]
// for (let i of A){
//     if(s.has(i)){
//         dup.push(i)
//     }
//     else{
//         s.add(i)
//     }
// }
// console.log(dup);  


// let a=[0, 1, false, true, '', 'hello', undefined, null, NaN] 
// function sample(x){
//     return Boolean(x);
// }
// console.log(a.filter(sample)); 


// let A=[1,2,3,4,5,6,7];
// let l=A.length;

// for (let i=l-1;i>=0;i--){
//     let j=Math.floor(Math.random()*(i+1));
//     [A[i],A[j]]=[A[j],A[i]];
// }
// console.log(A);


// let A=[2,3,4,5,6,7,8,4,6,7];
// let k=3;
// let i=0;
// let result=[]
// while(i<A.length){
//     result.push(A.slice(i,i+k));
//     i+=k 
// }
// console.log(result); 

// let s1=[2,3,4];
// let s2=[3,4,5];

// let k1=

// let a=['apple','banana','orange','mongo','banana','apple'] 
// a.sort()
// let b=a.filter((x,y)=>(x!=a[y+1]));
// console.log(b);


// let m=[1,2,3,4,5,6,7,8]
// let k1=3;
// let i=0;
// let k=[]
// while(i<m.length){
//     k.push(m.slice(i,k1+i));
//     i=i+k1;
// }
// console.log(k);


// find longest length in string 
// let s='i love javascript';
// let a=s.split(" ");
// let m1=0;
// let x=null;
// for (let i=0;i<a.length;i++){
//     let v=a[i].length 
//     if(v>m1){
//         m1=v;
//         x=a[i]
//     }
// }
// console.log(x);   


// let str1='hello';
// let str2='world'; 
// let flag=0;
// for (let i of str1){
//     if(!str2.includes(i)){
//         flag=1;
//         break 
//     }
// }
// if(flag==1){
//     console.log('flase');
// }
// else{
//     console.log("true");
// } 



// Question: Implement a function partitionArray that partitions an array into two arrays based on a predicate function.
// const isEven = num => num % 2 === 0;
// console.log(partitionArray([1, 2, 3, 4, 5, 6], isEven)); 
// Expected output: [[2, 4, 6], [1, 3, 5]

// let a=[1,2,3,4,5,6]; 

// function sample(a){
//     return a.reduce((x,y)=>{
//         x[y%2===0? 0 :1].push(y);
//         return x;
//     },[[],[]])
// }
// console.log(sample(a));  


// Question: Write a function medianOfArrays that takes two sorted arrays as input and returns the median of the combined array.
// console.log(medianOfArrays([1, 3, 5], [2, 4, 6])); 
// Expected output: 3.5
// function medianOfArrays(arr1, arr2) {
//     const merged = arr1.concat(arr2).sort((a, b) => a - b);
//     const mid = Math.floor(merged.length / 2);
//     return merged.length % 2 !== 0 ? merged[mid] : (merged[mid - 1] + merged[mid]) / 2;
// }   


let a={a:3,b:4,c:5,d:6}
let l=Object.keys(a) ;
console.log(l);
