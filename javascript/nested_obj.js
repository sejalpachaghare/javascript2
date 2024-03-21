const library = {
    fiction: {
        fantasy: {
            books: [
                { title: "Harry Potter", author: "J.K. Rowling" },
                { title: "The Hobbit", author: "J.R.R. Tolkien" }
            ]
        },
        mystery: {
            books: [
                { title: "The Da Vinci Code", author: "Dan Brown" },
                { title: "Gone Girl", author: "Gillian Flynn" }
            ]
        }
    },
    nonFiction: {
        history: {
            books: [
                { title: "Sapiens", author: "Yuval Noah Harari" },
                { title: "The Wright Brothers", author: "David McCullough" }
            ]
        },
        selfHelp: {
            books: [
                { title: "The Power of Habit", author: "Charles Duhigg" },
                { title: "Atomic Habits", author: "James Clear" }
            ]
        }
    }
};

// console.log(library);

// accessing element 
// console.log(library.fiction.fantasy.books[0].title); // Output: "Harry Potter"
// console.log(library["nonFiction"]["selfHelp"]["books"][1]["author"]); // Output: "James Clear"

// adding number
library.fiction.fantasy.books.push({ title: "The Lord of the Rings", author: "J.R.R. Tolkien" });

// adding new category
library.biography = {
    people: {
        books: [
            { title: "Steve Jobs", author: "Walter Isaacson" },
            { title: "Becoming", author: "Michelle Obama" }
        ]
    }
};

// updating element
library.fiction.fantasy.books[1].title = "The Fellowship of the Ring";

// delating element
library.nonFiction.selfHelp.books.pop(); // Remove the last book in the selfHelp category

// removing cateriy

delete library.fiction.mystery;


// accessing category
// console.log(library.fiction); // Access the 'fiction' category
// console.log(library.nonFiction); // Access the 'nonFiction' category

// console.log(library.fiction);
// console.log(library["nonFiction"]);
console.log(library.fiction.mystery);
// console.log(library["nonFiction"]["selfHelp"]);


// obj={
//     key:{
//         ABC:10
//     },
//     "key2":{
//         BCD:20
//     }
// }

// console.log(obj.key2.BCD);


const input= require("readline-sync");

let name = rl.question("enter name")
let email= rl.question("enter email")
let number= rl.question("enter number")
let passwordl= rl.question("enter password")

