// const letters = new Set(["a","b","c"]);

// console.log(letters);

// Create a Set
const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");

// console.log(letters);

let m="sejala"
let str=new Set(new String("hello"));
// console.log(str); 

let str2=new Set(m);
// console.log(str2);

let ages=[1,2,3,2,4,1,4];
// let b=new Set(ages);

let z=new Set([1,2,3,4,4,5]);
z.delete(4);
z.add(10)
// console.log(z);

let y=z.has(10);
// console.log(y)

// let i=z.clear();
// console.log(i);

for (let k of z){
    console.log(k);
}

for (let k in z){
    console.log(k);
}
