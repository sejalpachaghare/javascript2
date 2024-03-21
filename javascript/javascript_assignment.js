// 1. Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// // Sample Output: name,sclass,rollno
// for (let i in student){
//     console.log(i);
// }


// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };  

// console.log(student);
// delete student.rollno;
// console.log(student);


// 3. Write a JavaScript program to get the length of a JavaScript object.
// Sample object :
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 }; 

// let l=Object.keys(student).length;
// console.log(l);


// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

// var library = [ 
//    {
//        author: 'Bill Gates',
//        title: 'The Road Ahead',
//        readingStatus: true
//    },
//    {
//        author: 'Steve Jobs',
//        title: 'Walter Isaacson',
//        readingStatus: true
//    },
//    {
//        author: 'Suzanne Collins',
//        title:  'Mockingjay: The Final Book of The Hunger Games', 
//        readingStatus: false
//    }]; 

// for (let i=0;i<library.length;i++){
//     var k="need to lear "+(library[i].title)+"wrote by "+(library[i].author);
//     if(library[i].readingStatus==true){
//         console.log("you already reed "+k);
//     }
//     else{
//         console.log("need to read "+k);
//     }
// }


// let a=10;
// let b=7;
// console.log((a/b).toFixed(4));


// 5. Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes.
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.
// let r=2;
// let h=5; 
// let pi=Math.PI 
// let z=pi*(Math.pow(r,2)*h)
// console.log(z.toFixed(4));  


// 6. Write a bubble sort algorithm in JavaScript.
// Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
// Sample Data: [6,4,0, 3,-2,1]
// Expected Output : [-2, 0, 1, 3, 4, 6]

// let A=[6,4,0,3,-2,1];
// l=A.length;
// for (let i=0;i<l;i++){
//     for (let j=0;j<l-1;j++){
//         if(A[j]>A[j+1]){
//             let temp=A[j];
//             A[j]=A[j+1];
//             A[j+1]=temp;
//         }
//     }
// }
// console.log(A);


// 7. Write a JavaScript program that returns a subset of a string.
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]  
// let data='dog';
// let l=data.length 
// let list=[]
// for (let i=0;i<l;i++){
//     for (let j=i+1;j<=l;j++){
//         list.push(data.slice(i,j));
//     }
// }
// console.log(list); 


// 8. Write a JavaScript program to create a clock.
// Note: The output will come every second.
// Expected Console Output :
// "14:37:42"
// "14:37:43"
// "14:37:44"
// "14:37:45"
// "14:37:46"
// "14:37:47"

// while (true) {
//     let date = new Date();
//     let hours = date.getHours().toString().padStart(2, '0');
//     let minutes = date.getMinutes().toString().padStart(2, '0');
//     let seconds = date.getSeconds().toString().padStart(2, '0');
//     console.log(`${hours}:${minutes}:${seconds}`);
//     setTimeout(() => {}, 1000);
// }


// Display the clock every second
// setInterval(function() {
//     // Get the current date and time
//     var now = new Date();

//     // Extract hours, minutes, and seconds from the current time
//     var hours = now.getHours();
//     var minutes = now.getMinutes();
//     var seconds = now.getSeconds();

//     // Add leading zeros if the values are less than 10
//     hours = hours < 10 ? '0' + hours : hours;
//     minutes = minutes < 10 ? '0' + minutes : minutes;
//     seconds = seconds < 10 ? '0' + seconds : seconds;

//     // Display the time in the console
//     console.log(hours + ":" + minutes + ":" + seconds);
// }, 1000);



// to get current time
// var t= new Date()
// var h=t.getHours()
// var m=t.getMinutes()
// var s=t.getSeconds() 
// console.log(h+ ":" +m + ":" + s );


// 9. Write a JavaScript program to calculate circle area and perimeter.
// Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.
// function area(r){
//     let pi=Math.PI
//     return (pi*r*r);
// }
// function parimeter(r){
//     let pi=Math.PI 
//     return(2*pi*r)
// }
// let r=10;
// console.log(area(r)); 
// console.log(parimeter(r));  


// 10. Write a JavaScript program to sort an array of JavaScript objects.
// Sample Object :
var library = [ 
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }]; 
   
library.sort(function(a, b) {
    return a.libraryID - b.libraryID;
});

// Display the sorted library array
console.log(library);