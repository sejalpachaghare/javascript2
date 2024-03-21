// let A=['hello','world','admin','laptop','world'];

// function countfre(A){
//     let frequency={}
//     for(let i of A) {
//         if(frequency[i]) {
//             frequency[i]++;
//         }
//         else {
//             frequency[i]=1;
//         }
//     }
//     return frequency;
// }
// console.log(countfre(A));

// function small(A){
//     let dis={} 
//     for (let i of A){
//         // if(dis[i]){
//         //     dis[i]++
//         // }
//         if(i in dis){
//             dis[i]++;
//         }
//         else{
//             dis[i]=1 
//         }
//     }
//     return dis;
// }
// console.log(small(A));


// let dict1 = {'a': 1, 'b': 2, 'c': 3}
// let dict2 = {'b': 3, 'c': 4, 'd': 5}

// function sumof2(dict1,dict2){
//     let l1=Object.keys(dict1).length
//     let l2=Object.keys(dict2).length
//     return l1
// }
// o=sumof2(dict1,dict2);
// console.log(o);

// function add(dict1,dict2){
//     let dict3={};
//     // let l1=Object.keys(dict1).length;
//     // let l2=Object.keys(dict2).length; 
//     for (i in dict1){
//         if(dict1.hasOwnProperty(i)){
//             dict3[i]=dict1[i];
//         }
//     }
//     for (j in dict2){
//         if(dict2.hasOwnProperty(j)){
//             if(dict3.hasOwnProperty(j)){
//                 dict3[j]+=dict2[j];
//             }
//             else{
//                 dict3[j]=dict2[j];
//             }
//         }
//     }
//     return dict3;  
// }
// console.log(add(dict1,dict2));  



// function merge_dicts(dict1, dict2) {
//     let mergedDict = {};

//     // Iterate over keys of dict1
//     for (let key in dict1) {
//         if (dict1.hasOwnProperty(key)) {
//             mergedDict[key] = dict1[key];
//         }
//     }

//     // Iterate over keys of dict2
//     for (let key in dict2) {
//         if (dict2.hasOwnProperty(key)) {
//             // If the key already exists in mergedDict, add the value to it
//             if (mergedDict.hasOwnProperty(key)) {
//                 mergedDict[key] += dict2[key];
//             } else { // Otherwise, add the key-value pair to mergedDict
//                 mergedDict[key] = dict2[key];
//             }
//         }
//     }
    
//     return mergedDict;
// }

// let dict1 = {'a': 1, 'b': 2, 'c': 3};
// let dict2 = {'b': 3, 'c': 4, 'd': 5};

// console.log(merge_dicts(dict1, dict2));


// let myObject = { a: 1, b: 2, c: 3 };

// // Using a for...in loop
// for (let key in myObject) {
//     // Check if the property is directly on the object, not inherited from its prototype
//     if (myObject.hasOwnProperty(key)) {
//         console.log("Key:", key, "Value:", myObject[key]);
//     }
// }


let as={orange:2,banana:3,apple:2};
let ms={orange:1,banana:6,apple:5,sanchwitch:8}
// for (let i in as){
//     if(as.hasOwnProperty(i)){
//         console.log(i,as[i]);
//     }
// }

// function sample(as,ms){
//     let ns={}
//     for (let i in as){
//         if(as.hasOwnProperty(i)){
//             ns[i]=as[i];
//         }
//     }
//     for (let j in ms){
//         if(ms.hasOwnProperty(j)){
//             ns[j]+=ms[j];
//         }
//         else{
//             ns[j]=ms[j];
//         }
//     }
//     return ns;
// }
// console.log(sample(as,ms));

