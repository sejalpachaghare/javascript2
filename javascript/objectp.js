// // sort the object values
// let obj={a:3,b:7,c:1,d:2};
// let arr=Object.entries(obj);
// arr.sort((a,b)=>a[1]-b[1]);
// let newobj=Object.fromEntries(arr);
// console.log(newobj);

// const input=require("readline-sync");
// let a=input.question("enter number");
// console.log(a);


// const input = require("prompt-sync")(); // Corrected module name
// let a = input("Enter number: "); // Corrected prompt function name
// console.log(a);  


let obj={a:10,b:2,c:6,d:8,e:0};
let ar=Object.entries(obj);
ar.sort((a,b)=>a[1]-b[1]);
let m=Object.fromEntries(ar);
console.log(m);


const arr = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 1, name: 'John' }]; 
let uni=[];
let result=[]
for (let i of arr){
    let k=i.key;
    if(!uni.includes(k)){
        uni.push(k);
        result.push(i);
    }
}
console.log(result);


// You have two arrays of objects representing employees' basic information and their corresponding salaries. Merge the arrays based on the employee ID and add a new property totalSalary to each object.

// const basicInfo = [{ id: 1, name: 'John' }, { id: 2, name: 'Alice' }];
// const salaries = [{ id: 1, salary: 50000 }, { id: 2, salary: 60000 }];
// output
// [{ id: 1, name: 'John', salary: 50000, totalSalary: 50000 }, { id: 2, name: 'Alice', salary: 60000, totalSalary: 60000 }]

const basicInfo = [{ id: 1, name: 'John' }, { id: 2, name: 'Alice' }];
const salaries = [{ id: 1, salary: 50000 }, { id: 2, salary: 60000 }];

const mergedData = basicInfo.map(employee => {
    const correspondingSalary = salaries.find(salary => salary.id === employee.id);
    return {
        id: employee.id,
        name: employee.name,
        salary: correspondingSalary.salary,
        totalSalary: correspondingSalary.salary
    };
});

console.log(mergedData);

