// // Example list of numbers
// let numbers = [24, 36, 48, 60];

// // Finding HCF (GCD) of the list
// let hcf = numbers.reduce((a, b) => {
//     let x = a;
//     let y = b;
//     while (y !== 0) {
//         let temp = y;
//         y = x % y;
//         x = temp;
//     }
//     return x;
// });

// // Finding LCM of the list
// let lcm = numbers.reduce((a, b) => (a * b) / hcf);

// console.log("List of numbers:", numbers);
// console.log("HCF:", hcf);
// console.log("LCM:", lcm);



// Example numbers
let num1 = 24;
let num2 = 36;

// Finding HCF (GCD)
let a = num1;
let b = num2;
while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
}
let hcf = a;

// Finding LCM
let lcm = (num1 * num2) / hcf;

console.log("Numbers:", num1, "and", num2);
console.log("HCF:", hcf);
console.log("LCM:", lcm);

