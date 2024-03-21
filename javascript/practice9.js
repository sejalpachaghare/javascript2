// Question: Filter students who have passed the exam (grade >= 60).
// students = [    {'name': 'John', 'grade': 75},    {'name': 'Emma', 'grade': 55},    {'name': 'Michael', 'grade': 90}]
// Expected Output:
// [{'name': 'John', 'grade': 75}, {'name': 'Michael', 'grade': 90}]

// let students = [ {'name': 'John', 'grade': 75}, {'name': 'Emma', 'grade': 55}, {'name': 'Michael', 'grade': 90}]   
// let c=students.filter((x)=>x.grade>=60);
// console.log(c);


// Question: Calculate the average grade of all students.
// students = [    {'name': 'John', 'grade': 75},    {'name': 'Emma', 'grade': 55},    {'name': 'Michael', 'grade': 90}]
// Expected Output: 73.33   
// let students = [ {'name': 'John', 'grade': 75}, {'name': 'Emma', 'grade': 55}, {'name': 'Michael', 'grade': 90}]   
// let m=Object.keys(students).length;
// let z=students.filter(sample); 
// let k=students.reduce((x,y)=>(x=x+y.grade),0);
// console.log(k/m);  


// Question: Convert student names to uppercase.
// students = [    {'name': 'John', 'grade': 75},    {'name': 'Emma', 'grade': 55},    {'name': 'Michael', 'grade': 90}]
// Expected Output:
// ['JOHN', 'EMMA', 'MICHAEL']     
// students = [ {'name': 'John', 'grade': 75},    {'name': 'Emma', 'grade': 55},    {'name': 'Michael', 'grade': 90}] 
// let k=students.map(x=>(x.name).toUpperCase());
// console.log(k);


// Question: Calculate the total price of all products.
// products = [    {'name': 'Laptop', 'price': 1000},    {'name': 'Mouse', 'price': 20},    {'name': 'Keyboard', 'price': 50}]
// Expected Output: 1070  
// products = [{'name': 'Laptop', 'price': 1000},{'name': 'Mouse', 'price': 20},{'name': 'Keyboard', 'price': 50}]
// let k=products.reduce((x,y)=>(x+=y.price),0)
// console.log(k);

// Question: Filter products with prices greater than $50.
// products = [    {'name': 'Laptop', 'price': 1000},    {'name': 'Mouse', 'price': 20},    {'name': 'Keyboard', 'price': 50}]
// Expected Output:
// [{'name': 'Laptop', 'price': 1000}, {'name': 'Keyboard', 'price': 50}]  
// let k=products.filter(x=>x.price>50);
// console.log(k);

// let a=([1, [2, [3, 4]], 5]);
// console.log(a.flat(Infinity));


// console.log(findMostFrequent([1, 2, 3, 2, 2, 4, 5])); // Expected output: 2
// console.log(findMostFrequent(['a', 'b', 'a', 'c', 'c', 'c'])); // Expected output: 'c'  
// let A=[1, 2, 3, 2, 2, 4, 5];
// A.sort()
// let k=0
// let m=0;
// let c=0 
// for (let i=0;i<A.length;i++){
//     if(A[i]==A[i+1]){
//         c=c+1 ;
//     }
//     else{
//         if(m<c){
//             m=c 
//             k=A[i]
//             c=0
//         }
//     }
// }
// console.log(k); 


// console.log(rotateRight([1, 2, 3, 4, 5], 2)); // Expected output: [4, 5, 1, 2, 3]
// console.log(rotateRight(['a', 'b', 'c', 'd'], 1)); // Expected output: ['d', 'a', 'b', 'c']  
// let a=[1,2,3,4,5] 
// let k1=2;
// for (let i=0;i<2;i++){
//     k=a.pop()
//     a.unshift(k)
// }
// console.log(a);


// Question: Write a function to remove a specific element from an array.
// console.log(removeElement([1, 2, 3, 4, 5], 3)); // Expected output: [1, 2, 4, 5]
// console.log(removeElement(['a', 'b', 'c', 'd'], 'c')); // Expected output: ['a', 'b', 'd']
// let A=[1,2,3,4,5];
// A.pop(3)
// console.log(A);


// Write a function to remove a specific element from an array.
// console.log(removeElement([1, 2, 3, 4, 5], 3)); // Expected output: [1,   2, 4, 5]
// console.log(removeElement(['a', 'b', 'c', 'd'], 'c')); // Expected output: ['a', 'b','d'];
// let a=[1,2,3,4,5];
// let k=3;
// console.log(a.filter(x=>x!=k));  


// let A=['apple','banana','orange','apple','banana','mongo']; 
// function sample(A){
//     let obj={}
//     for (let i=0;i<A.length;i++){
//         if(obj[A[i]]){
//             obj[A[i]]++
//         }
//         else{
//             obj[A[i]]=1;
//         }
//     }
//     return obj;
// }
// console.log(sample(A))   


// let n={a:2,b:3,c:4};
// let m={c:4,d:4,e:7,b:3} 
// function greed(n,m){
//     let p={}
//     for (let i in n){
//         if(n.hasOwnProperty(i)){
//             p[i]=n[i];
//         }
//     }
//     for(let j in m){
//         if(m.hasOwnProperty(j)){
//             if(p.hasOwnProperty(j)){
//                 p[j]+=m[j];
//             }
//             else{
//                 p[j]=m[j]
//             }
//         }
//     }
//     return p;
// }
// console.log(greed(n,m))  


// 3)Key with the Highest Value
// Define a function which takes a dictionary as a parameter and returns the key with the highest value in a dictionary.

// my_dict = {'a': 5, 'b': 9, 'c': 2}
// dict = {'a': 5, 'b': 9, 'c': 2}
// max_value_key(my_dict))
// Output:
// b  

// let m=null;
// let k=0
// for (let i in dict){
//     if(dict[i]>k){
//         k=dict[i]
//         m=i;
//     }
// }
// console.log(m);
// let b=Object.keys(my_dict);
// let c=Object.values(my_dict);
// console.log(Math.max(...c));   

// dict = {'a': 1, 'b': 2, 'c': 3} ;
// for (i in dict){
//     let a=dict[i]
//     let b=i 
//     delete(dict[i]);
//     dict[a]=b 
// }
// console.log(dict);    

let dict = {5: 1, 10: 2, 15: 3};
let reversedDict = {};

for (let key in dict) {
    let value = (dict[key]);
    reversedDict[value] = key;
}
console.log(reversedDict);


// let s='hello world';
// let a=s.split("");
// a.sort()
// let m=a.join("")
// console.log(m);