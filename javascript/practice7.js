// let A=[1,2,3,4,5];
// console.log(A.map(x=>x*2));

// // function sample(A){
// //     let ma=0 
// //     for (let i in A):

// // }
// // console.log(A.map(sample));

// let a=Math.max(...A);
// console.log(a);

// function countOccurrences(arr) {
//     let counts = {};
//     for (let i = 0; i < arr.length; i++) {
//         let num = arr[i];
//         // If the number exists in the counts object, increment its count by 1
//         if (counts[num]) {
//             counts[num] += 1;
//         } else {  // If the number does not exist, set its count to 1
//             counts[num] = 1;
//         }
//     }
//     return counts;
// }

// let a = [1, 2, 3, 3, 2, 4, 5];
// let result = countOccurrences(a);
// console.log(result);  // Output: {1: 3, 2: 2, 3: 2, 4: 1, 5: 2, 6: 1}


// occurances of number in aaray
// let a=[1,2,2,4,5,4,3,3,4,4,5,5]

// function count(a){
//     let obj={}
//     for (let i=0;i<a.length;i++){
//         let n=a[i]
//         if(obj[n]){
//             obj[n]+=1 
//         }
//         else{
//             obj[n]=1;
//         }
    
//     }
//     return obj;
// }
// console.log(count(a));


// max count of occurqnces
// let a=[1,2,2,4,5,4,3,3,4,4,5,5]

// function count(a){
//     let obj={}
//     let m1=null;
//     for (let i=0;i<a.length;i++){
//         let n=a[i]
//         if(obj[n]){
//             obj[n]+=1 
//         }
//         else{
//             obj[n]=1;
//         }
//         if(obj[n]>m1){
//             m1=obj[n];
//         }
//     }
//     return m1 
// }
// console.log(count(a));  


let s='abc1234';
let a=s.split('')
function sample(s){
    let s1=null
    let num=['1','2','3','4','5','6','7','8','9'];
    for (let i of s){
        if(i in num){
            o=parseInt(i);
            s1=s1+o 
        }
    }
    return s1 ;
}
console.log(sample(s));  

