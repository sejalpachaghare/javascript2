// let A=['class','claer','clane'];
// let str="";
// for(let i=0;i<A[0].length;i++){
//     let k=A[0][i];
//     let common=true;
//     for (let j=1;j<A.length;j++){
//         if((A[j][i])!=k){
//             common=false;
//             break 
//         }
//     }
//     if(common){
//         str=str+k;
//     }
//     else{
//         break;
//     }
// }
// console.log(str);


// students = [ {'name': 'John', 'grade': 75}, {'name': 'Emma', 'grade': 55},  {'name': 'Michael', 'grade': 90}]
// function sample(x){
//     return x.grade>=75;
// }
// let k=students.filter(sample);
// console.log(k);


// let n={a:2,b:3,c:4};
// let m={c:4,d:4,e:7,b:3}
// function sample(n,m){
//     let obj={}
//     for (i in n){
//         if(n.hasOwnProperty(i)){
//             obj[i]=n[i] 
//         }
//     }
//     for (i in m){
//         if(m.hasOwnProperty(i)){
//             if(obj.hasOwnProperty(i)){
//                 obj[i]=obj[i]+m[i];
//             }
//             else{
//                 obj[i]=m[i];
//             }
//         }
//     }
//     return obj;
// }
// console.log(sample(n,m));


// let obj={a:3,b:1,c:4,e:5,f:0};
// let k=Object.entries(obj);
// let m=Object.fromEntries(k.sort((a,b)=>a[1]-b[1]));
// console.log(m);

// let dict = {5: 1, 10: 2, 15: 3};
// function sample(dict){
//     let obj={}
//     for (let i in dict){
//         let k=dict[i];
//         obj[k]=i 
//     }
//     return obj
// }
// console.log(sample(dict));

// let A=[23,1,23,45,6,7];
// A.sort()
// console.log(A);
// function sample(A){
//     return A.sort((a,b)=>a-b)
// }
// console.log(sample(A));


// binary to decimal in javascript
let s="100"
let k=parseInt(s,2);
console.log(k);

// decimal to binary 
let n=4;
let m=(n>>>0).toString(2);
console.log(m);


