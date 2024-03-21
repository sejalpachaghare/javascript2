// let user = {name: 'Emma', age: 28, email: 'emma@example.com'};
// // check properety is exict or not 
// let b=Object.keys(user).includes('age');
// // delete property in objet  
// delete(user.age)


// let colors = {red: 'apple', blue: 'sky', green: 'grass'};
// // console.log(findKeyByValue(colors, 'apple')); // Expected output: 'red'
// // console.log(findKeyByValue(colors, 'ocean')); // Expected output: null  
// let out=null;
// let flag=0;
// for (let i in colors){
//     if(colors[i]=='apple'){
//         out=i 
//         flag=1;
//         break;
//     }
// }
// if(flag==1){
//     console.log(out);
// }
// else{
//     console.log('not exict');
// }


// console.log(mergeObjects({a: 1, b: 2}, {b: 3, c: 4})); // Expected output: {a: 1, b: 3, c: 4}
// console.log(mergeObjects({x: 'foo', y: 'bar'}, {y: 'baz', z: 'qux'})); // Expected output: {x: 'foo', y: 'baz', z: 'qux'}
// let a={a:1,b:2};
// let b={b:4,c:5};
// freeze property is used for read only 
// Object.freeze(a);
// console.log(Object.assign(a,b));  


// console.log(countValues({a: 1, b: 2, c: 1, d: 2, e: 3})); // Expected output: {1: 2, 2: 2, 3: 1}
// console.log(countValues({x: 'apple', y: 'banana', z: 'apple'})); // Expected output: {'apple': 2, 'banana': 1}
// let a={a:1,b:2,c:1,d:2,e:3}; 
// let b=Object.values(a).sort()
// let c=1;
// let obj={}
// for (let i=0;i<(b.length);i++){
//     if(b[i]==b[i+1]){
//         c=c+1 
//     }
//     else{
//         obj[b[i]]=c;
//         c=1
//     }
// }
// console.log(obj);


// 7. Write a JavaScript program that returns a subset of a string.
// Expected Output: ["d", "do", "dog", "o", "og", "g"]
// let s='sejal';
// let a=s.split('');
// let m=[];
// for (let i=0;i<s.length;i++){
//     for(let j=i+1;j<=s.length;j++){
//         let k=(s.substring(i,j));
//         m.push(k);
//     }
// }
// console.log(m);


// let a=[1,2,3,4,5,6] 
// if(Array.isArray(a)){
//     console.log('true');
// }
// else{
//     console.log('false');
// } 

// let s='sejal'
// if(String.toString(s)){
//     console.log("true");
// }
// else{
//     console.log("false");
// }
