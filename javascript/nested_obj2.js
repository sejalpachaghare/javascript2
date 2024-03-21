const obj={
    "key" : function(a){
        console.log(a);
    },
    1:13,
    2:"kqk"
}

obj.key("hey!");
obj["key"]("kiran");
obj[3]="army";
console.log(obj[1]);


// const obj1={

//     "key" :{
//         abc:function(a){
//             console.log(a);
//     } ,
//     "value": 13
//     }
// }

// obj1.key.abc("hey");
// console.log(obj1.key.value);

// *#### TAKING ONLY SINGLE OBJECT KEY VALUES ####**
// const rl =require("readline-sync");
// key = rl.question("enter a key ");
// value =rl.questionInt("enter a value");
// const obj3 ={};
// // obj3.key=value;
// obj3[key] = value
// console.log(obj3);


// #####**NESTED OBJECT INPUT FROM THE USERu*#####
// *** IN THIS CODE WE TAKE INPUT ONLY ONE KEY MAIL AND OTHER VALUES OF KEY ***
// const rl = require("readline-sync");
// // Ask the user to enter keys and values
// let key = rl.questionEMail("Enter a key: ");
// let value = rl.question("Enter a value: ");
// let value1 = rl.questionInt("Enter another value: ");
// let value2 = rl.question("Enter one more value: ");

// // Initialize an empty object
// const obj4 = {};

// // Initialize nested objects as needed
// obj4[key] = {};
// // AFTER . THE NAME ,NUMBER , PASSWORD WILL BE CONSTANT****
// obj4[key].name = value;
// obj4[key].number = value1;
// obj4[key].password=value2;

// // Print the resulting object
// console.log(obj4);



// #####**NESTED OBJECT INPUT FROM THE USERu*#####
// *** TAKING INPUT ALL KEY AND VALUE ****
// const rl = require("readline-sync");
// // Ask the user to enter keys and values
// let key = rl.question("Enter a key: ");
// let value = rl.question("Enter a value: ");
// let value1 = rl.question("Enter another value: ");
// let value2 = rl.question("Enter one more value: ");

// // Initialize an empty object
// const obj4 = {};

// // Initialize nested objects as needed
// obj4[key] = {};
// obj4[key][value] = {};
// obj4[key][value][value1] = value2;

// // Print the resulting object
// console.log(obj4);



// ** USE FUNCTION TO DO NOT REAPEAT SAME OBJECT THINGS LIKE GIVEN EXAMPLE
// const emp1 ={};
// emp1.firstname="kiran";
// emp1.lastname="Bramhane";
// emp1.gender="F";
// emp1.designation="manager";

// const emp2 = {};
// emp2.firstname="kriti";
// emp2.lastname="sharma";
// emp2.gender="F";
// emp2.designation="Hr";


// *** USE THIS WAY TO CREATE SAME PROPERTIES MULTIPLE OBJECT WITH FUNCTION
// const Input=require("readline-sync");
// const firstname = Input.question("enter ypur name");
// const lastname = Input.question("enter ypur surname");
// const gender= Input.question("enter ypur gender");
// const designation = Input.question("enter ypur designation");

// function Person(firstname,lastname,gender,designation){
//     this.firstname=firstname;
//     this.lastname=lastname;
//     this.gender=gender;
//     this.designation=designation;
// }
// const person1 = new Person(firstname,lastname,gender,designation);
// console.log(person1);

// const person2= new Person("sidhii","taur","F","CEO");
// console.log(person2);



// function Objectfunction(firstname,lastname,gender,designation){
//     const newObject ={};
//     newObject.firstname=firstname;
//     newObject.lastname=lastname;
//     newObject.gender=gender;
//     newObject.designation=designation;
//     return newObject;
// }

// const emp3=Objectfunction(firstname,lastname,gender,designation);
// const emp6=Objectfunction(firstname,lastname,gender,designation);

// console.log(emp6);
// console.log(emp3);