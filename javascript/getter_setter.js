var person = {
    name:'Sejal',
    age:19,
    // getname : function(){
    //     return this.name.toUpperCase();
    // }

    // get getname(){
    //     return this.name.toUpperCase();
    // },

    set setname(n){
        this.name = n.toUpperCase();
    }
};

// console.log(person.getname());
// console.log(person.getname)

person.setname='sej';

console.log(person);  



// const person = {
//     _firstName: 'John',
//     _lastName: 'Doe',
//     fullName() {
//       return `${this._firstName} ${this._lastName}`;
//     }
//   };

// console.log(person.fullName());  


// Higher-order function: takes a function as an argument
// function multiplier(factor) {
//     return function(x) {
//       return x * factor;
//     };
//   }
  
//   // Function that multiplies by 2
//   const double = multiplier(2);
  
//   // Function that multiplies by 3
//   const triple = multiplier(3);
  
//   // Using the higher-order function to double and triple numbers
//   console.log(double(5)); // Output: 10
//   console.log(triple(5)); // Output: 15
  

// function multiplier(factor) {
//     return function(x) {
//       return x * factor;
//     };
//   }
  

// function sample(multiplier){
//     console.log(multiplier())
// }
//   // Function that multiplies by 2
//   const double = multiplier(2);
  
//   // Function that multiplies by 3
//   const triple = multiplier(3);
  
//   // Using the higher-order function to double and triple numbers
//   console.log(double(5)); // Output: 10
//   console.log(triple(5)); // Output: 15   

  
// function a(){
//     return function b(){
//         console.log("hello");
//     }
// }
// k=a() 
// function z(A){
//     A();
// }
// console.log(z(k)); 


// function a(){
//     return function(){
//         console.log("hello am a function from a");
//     }
// }

// let b=a();
// // function xyz(parameter){
// //     parameter();
// // }
// // xyz(b); 

// //  this is another function 
// function xyz(){
//     b()
// }
// xyz();


// let toyBox = {
//     _toy: '', // This is a private property

//     // Setter function
//     set toy(newToy) {
//         if (newToy !== '') { // Check if the new toy is not empty
//             this._toy = newToy;
//             console.log('Toy is stored in the box.');
//         } else {
//             console.log('Please provide a valid toy.');
//         }
//     },

//     // Getter function
//     get toy() {
//         console.log('Toy is retrieved from the box.');
//         return this._toy;
//     }
// };

// // Setting a new toy
// toyBox.toy = 'Teddy Bear'; // This will call the setter function

// // Getting the toy
// let retrievedToy = toyBox.toy; // This will call the getter function
// console.log('Retrieved Toy:', retrievedToy);
