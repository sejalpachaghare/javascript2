// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// // sum is now 15
// console.log(sum);

// const numbers = [5,5,5,999];

// const sum = numbers.reduce((accumulator, currentValue) => {
//     return Math.max(accumulator, currentValue);
// }, 0);

// console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)

// function test(numbers){
//     return(numbers.reduce((x,y)=>x+y,0));
// }
// console.log(test()); 


var s="hello";
var z=s.length;
// console.log(z);

// const str = "abc";
// console.log(str.repeat(3)); // Output: abcabcabc 

// let A=[1,2,3,4,5];
// A.pop();
// console.log(A);

// A.unshift(0);
// console.log(A);

// const str = "Hello world";
// console.log(str.indexOf("o")); // Output: 12
// console.log(str.indexOf("foo")); // Output: -1 (not found)


// const myString = "Hello world";
// const count= myString.split("o").length - 1;
// console.log(count);


// const number=[1,2,3,4];
// let sum=0
// for (let n of number){
//     sum+=n ;
// }
// console.log(sum);  

// const sum=number.reduce((accumelator,currentvalue) =>{
//     return accumelator+currentvalue;
// },0);

// console.log(sum);  



// let p=[1,2,3,4,5];

// function sample2(accumelator,currentValue){

//     accumelator[0]+=currentValue;
//     accumelator[1]*=currentValue;
//     return accumelator;
// }

// let inaccumelator=[0,1]

// let r1=p.reduce(sample2,inaccumelator);
// let r2=p.reduce(sample2,inaccumelator);

// console.log(r1[0]);
// console.log(r2[1]);  



// let p = [1, 2, 3, 4, 5];

// function sample2(accumulator, currentValue) {
//     accumulator[0] += currentValue; 
//     accumulator[1] *= currentValue; 
//     return accumulator;
// }

// let initialAccumulator = [0, 1];

// let result = p.reduce(sample2, initialAccumulator);

// console.log("Sum:", result[0]);
// console.log("Product:", result[1]);    



let a=[1,2,3,4,5,6,7,8];
function sample4(x,y){
    return Math.max(x,y);
}
console.log(a.reduce(sample4));
console.log(a.reduce((x,y)=>Math.max(x,y)));

let s1="sejal"
console.log(s1.repeat(2));

