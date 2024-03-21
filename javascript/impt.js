// let n=12345
// let a=Array.from(String(n),Number);
// let a=Array.from(String(n),Number);

// let A=[11,51,6,23,12,45,32,12];
// // let k=A.join("");  
// // let l=A.length
// let m=A.sort((a,b)=>(a- b));
// let l=Math.max(12,56)
// console.log(l);


// const example = ({ a, b, c }) => {
//     console.log(a, b, c);
//    };
// example(0, 1, 2); 

// let s="hello world"

// function frequency(s){
//     let obj={};
//     for (let i of s){
//         if(obj[i]){
//             obj[i]++;
//         }
//         else{
//             obj[i]=1;
//         }
//     }
//     return obj;
// }
// console.log(frequency(s)); 

// let obj={a:2,b:1,c:4,d:0}
// let a=Object.entries(obj)
// let k=Object.fromEntries(a.sort((a,b)=>a[1]-b[1]));
// console.log(k);

// console.log(Object.values(obj).sort())


// let a1=12345678910
// let a2=Array.from(String(a1),Number);
// console.log(a2);

// let a3=[1,2,3,4,5];
// let a4=a3.join("");
// console.log(a4);


// let k1=["abc123","awe","qwe321","123"] ;
// let rg=/\d/;
// let c= /^[a-zA-Z]+$/
// let t=k1.filter(x=>x.match(rg));
// console.log(t);


let n=10;
function series(n){
    let A=[0,1];
    for (let i=0;i<n-2;i++){
        s=A[i]+A[i+1];
        A.push(s);
    }
    return A;
}
console.log(series(n));