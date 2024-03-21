// let world=['Apple','Banana','Orange','Banana','Tomato'];

// function sample(world){
//     let frequency={};
//     for (let i of world){
//         if(frequency[i]){
//             frequency[i]+=1;
//         }
//         else{
//             frequency[i]=1;
//         }
//     }
//     return frequency;
// }

// let b=sample(world);
// console.log(b);


// let dict1={a:1,b:3,c:5,d:6};
// let dict2={a:0,b:10,c:5};

// function merge(dict1,dict1){
//     let dict3={}
//     for (let i in dict1){
//         if(dict1.hasOwnProperty(i)){
//             dict3[i]=dict1[i]
//         }
//     }
//     for (let i in dict2){
//         if(dict2.hasOwnProperty(i)){
//             if(dict3.hasOwnProperty(i)){
//                 dict3[i]+=dict2[i];
//             }
//             else{
//                 dict3[i]=dict1[i];
//             }
//         }
//     }
//     return dict3;
// }
// console.log(merge(dict1,dict2));  


// function maxKeyValue(obj) {
//     let maxKey = null;
//     let maxValue = -Infinity;

//     for (let key in obj) {
//         if (obj[key] > maxValue) {
//             maxValue = obj[key];
//             maxKey = key;
//         }
//     }

//     return maxKey;
// }

// // Example usage:
// let myObj = {'a': 5, 'b': 9, 'c': 2};
// console.log(maxKeyValue(myObj)); // Output: b  



// let obj={a:10,b:90,l:0};
// function maxval(obj){
//     let a=null;
//     let b=-Infinity; 
//     for (let i in obj){
//         if(obj[i]>b){
//             b=obj[i];
//             a=i ;
//         }
//     }
//     return a;
// }
// console.log(maxval(obj));     

// let myObj = {'a': 5, 'b': 9, 'c': 2};
// console.log(maxKeyValue(myObj)); // Output: b    

// let obj={a:10,b:90,l:0};
// function maxval(obj){
//     let a=null;
//     let b=null; 
//     for (let i in obj){
//         a=obj[i];
//         obj.i=i;
//         i=a;
//     }
//     return obj;
// }
// console.log(maxval(obj));     


// const obj={a:1,b:4,c:6};

// function greed(obj){
//     let b=-Infinity;
//     for (let i in obj){
//         if(obj[i]>b){
//             b=obj[i];
//         }
//     }
//     return b;
// }
// console.log(greed(obj));

// function reverseObject(obj) {
//     const reversedObj = {};
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             reversedObj[obj[key]] = key;
//         }
//     }
//     return reversedObj;
// }

// // Example usage:
// const myObj = {'a': 1, 'b': 2, 'c': 3};
// const reversedObj = reverseObject(myObj);
// console.log(reversedObj);

// let obj1={a:1,b:3,c:4};
// function reversed(){
//     return 
// }


// let a=[1,2,3,4,5,6];

// function sample(x){
//     return x=x*2 
// }
// console.log(a.map(sample));

// console.log(a.map(x=>x/2));


// let b=["abc123",'cxr45','ser','ioy8'];

// function sample(x){
//     let a=x.split(''); 
//     return a;
// }
// console.log(b.filter(x));  


// const input = ['abc123', 'def', 'ghi456'];

// // Filter out elements that include numbers in the string
// const filtered = input.filter(item => /\d/.test(item));

// console.log(filtered); // Output the filtered array


// let a=['abc123','xyz456','1234','poi90'];

// function greed(x){
//     // /\d/ for check number 0 to 9 
//     // /[aeiouAEIOU]/ 
//     //  for alphabate B=/[a-zA-Z]/ 
//     b=/[aeiou]/ ;
//     return(b.test(x));
// }

// let b=/[aeiou]/;
// console.log(a.filter(greed));
// console.log(a.filter(x=>b.test(x)));


// let m=[1,2,3,4,5];

// function unit(x,y){
//     return x+=y; 
// }
// console.log(m.reduce(unit));
// console.log(m.reduce((x,y)=>x+=y)); 



// let input=['hello world','this is awesome','this is python'];

// function sample(x){
//     return x.split(" ");
// }
// console.log(input.map(sample));

// console.log(input.map(x=>x.split(" ")));


// let n=[1,2,3,4,5,6,7,8,9,10];

// function unity(x){
//     return x%2==0;
// }

// console.log(n.filter(unity));   
// console.log(n.filter(x=>x%2==0));


// let Input= [{'name': 'Alice', 'age': 20, 'score': 85}, {'name': 'Bob', 'age': 22, 'score': 75}, {'name': 'Charlie', 'age': 21, 'score': 95}]

// function sample(x,y){
//     return x+y.age; 
// }

// console.log(Input.reduce(sample,0));

// let students = [
//     { name: 'Alice', age: 20, score: 85 },
//     { name: 'Bob', age: 22, score: 75 },
//     { name: 'Charlie', age: 21, score: 95 }
//   ];

// function sample(x){
//     return x.score>80;
// }
// console.log(students.filter(sample));


// let a=[1,2,3,4];
// let b=[1,2,3,4];

// if(a==b){
//     console.log(1)
// }
// else{
//     console.log(0);
// } 

// const obj = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };
  
//   console.log(Object.keys(obj));

const obj = {
    name: "John",
    age: 30
  };
  
console.log(Object.entries(obj));
  
