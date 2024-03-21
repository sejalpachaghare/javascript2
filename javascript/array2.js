// array method
// copy within
// let A=["apple",'banana','orange','mongo','kiwi','pineapple'];
// console.log(A.copyWithin(2,0));
// console.log(A.copyWithin(2,0,2));

// const myArr = [[1,2],[3,[4,11]],[5,6]]; 
// console.log(myArr.flat(Infinity));

// let k='a';
// let m='z';
// let n=2;

// function sample(k,m,n){
//     let A=[]
//     let i=k.charCodeAt(0);
//     let f=m.charCodeAt(0);
//     while(i<=f){
//         A.push(String.fromCharCode(i));
//         i=i+n;
//     }
//     return A;
// }
// console.log(sample(k,m,n));

// let n=1234678;
// let k=String(n)
// let s=k.split("");
// for (let i=0;i<s.length;i++){
//     if(s[i]%2==0 && s[i+1]%2==0){
//         s.splice(i+1,0,"-");
//     }
// }
// console.log(s);


let s=['a','c','d','e','f','a','b','b','d'];
function sample(s){
    let obj={}
    s.sort();
    for(let i=0;i<s.length;i++){
        if(obj.hasOwnProperty(s[i])){
            obj[s[i]]++;
        }
        else{
            obj[i]=s[i];
        } 
    }
    return obj ;
}
console.log(sample(s));

