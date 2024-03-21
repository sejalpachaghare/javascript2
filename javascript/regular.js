// Validate a Phone Number:
// Question: Write a regular expression to validate a phone number in the format XXX-XXX-XXXX.
// Test Cases:
// Valid: "123-456-7890", "555-555-5555"
// Invalid: "1234567890", "12-3456-7890"
// let a='123-456-7891';
// let regax=/^\d{3}-\d{3}-\d{4}$/;
// console.log(regax.test(a)); 


// Extracting Numbers from a String:
// Question: Write a regular expression to extract all numbers from a string.
// String: "I have 5 apples and 3 bananas."
// Extracted Numbers: [5, 3]
// const string = "I have 5 apples and 3 bananas.";
// const numbers = string.match(/\d+/g);
// console.log(numbers); // ["5", "3"]


// let a='abcdef'
// let r=/[a-z]/
// console.log(r.test(a));


// const str = "apple 5 banana 6";
// const numbers = str.match(/\d+/g); // Match all sequences of digits
// console.log(numbers);
// let sum = 0;

// if (numbers) {
//     numbers.forEach(number => {
//         sum += parseInt(number); // Convert each matched number to an integer and add to sum
//     });
// }

// console.log("The sum of numbers in the string is:", sum);   

// let s=new Set([1,2,3,4,5]) 
// console.log(Array.from(s)) 
// console.log([...s]);

// let n=1234;
// let arr=Array.from(String(n),Number);

