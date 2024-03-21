// time is valid or not 

// const input=require("prompt-sync")()
// let a=input("enter time in hours:minute formata : ");
// let b=a.split(":")
// let c=parseInt(b[0],10);
// let d=parseInt(b[1],10);
// if(isNaN(c) || isNaN(d) || c>24 || d>60){
//     console.log("invalide time");
// }
// else{
//     console.log(c+":"+c);
// }

// const input =require("readline-sync");
// let a=input.question("enter time in this format HH:MM: ")
// let b=input.question("enter time in this format HH:MM: ")  


// function sample(){
//     // Question: Write a function in JavaScript that takes two time strings in the format "HH:MM" (24-hour clock) and
//     //  returns the duration between them in minutes. 
//     // console.log(calculateDuration("08:30", "12:45")); // Expected output: 255   
//     // console.log(calculateDuration("23:15", "01:30")); // Expected output: 135

//     const input =require("readline-sync");
//     let a=input.question("enter time in this format HH:MM: ")
//     let b=input.question("enter time in this format HH:MM: ")  
//     const [h1,m1]=a.split(":").map(Number)
//     const [h2,m2]=b.split(":").map(Number) 
//     if(isNaN(h1) || isNaN(h2) || isNaN(m1) || isNaN(m2) || (h1>23) || (h2>23)|| (m1>59)|| (m2>59)){
//         console.log("INVALID TIME");
//     }
//     else{
//         let l1=h1*60+m1
//         let l2=h2*60+m2 
//         if(l1<l2){
//             console.log(l2-l1); 
//         }
//         else{
//             let z=(24*60)-l1
//             console.log(z+l2);
//         }
//     }
// }

// console.log(sample());   


// Question: Implement a function to add a specified number of minutes to a given time and return the result in the "HH:MM" format.

// Sample Test Cases:
// javascript
// Copy code
// console.log(addMinutes("10:30", 90)); // Expected output: "12:00"
// console.log(addMinutes("23:45", 60)); // Expected output: "00:45"

// const input=require("readline-sync");
// let a=input.question("enter time: ");
// let b=input.questionInt("enter how many add: ");

// const[h,m]=a.split(":").map(Number)
// let tol=(h*60)+m+b 

// let total=tol%1440 
// let s=Math.floor(total/60) 
// let p=total%60 

// if(s>12){
//     let k=s-12 
//     let z=`${String(k).padStart(2,0)}:${String(p).padStart(2,0)}`
//     console.log(z)
// }
// else{
//     let z=`${String(s).padStart(2,0)}:${String(p).padStart(2,0)}`
//     console.log(z)
// }


// Question: Write a function to convert a given time from the 24-hour format ("HH:MM") to the 12-hour format ("HH:MM AM/PM").
// console.log(convertTo12Hour("13:30")); // Expected output: "1:30 PM"
// console.log(convertTo12Hour("22:15")); // Expected output: "10:15 PM"


// const input =require("readline-sync");
// let a=input.question("enter time in this format HH:MM: ") 

// const [h,m]=a.split(":").map(Number);
// if(h>12){
//     s=h-12 
//     let z=`${String(s).padStart(2,0)}:${String(m).padStart(2,0)} PM`;
//     console.log(z);
// }
// else{
//     console.log(String(a)+' AM');
// }

// Question: Implement a function that takes a duration in minutes and returns a string representing the duration in hours and minutes (e.g., "2 hours 15 minutes").
// console.log(formatDuration(150)); // Expected output: "2 hours 30 minutes"
// console.log(formatDuration(90)); // Expected output: "1 hour 30 minutes"

// const input=require("readline-sync")
// let a=input.questionInt("enter number: ");

// let m=Math.floor(a/60)
// let n=a%60 
// console.log(`${String(m).padStart(2,0)}:${String(n).padStart(2,0)}`);


// Question: Write a function to determine whether a given time falls within a specified range (inclusive) defined by two time strings (start time and end time) in the "HH:MM" format.
// Sample Test Cases:
// javascript
// Copy code
// console.log(isTimeInRange("10:00", "16:00", "12:30")); // Expected output: true
// console.log(isTimeInRange("20:00", "02:00", "23:45")); // Expected output: true   
// tell me more test cases for this question beacuse i did not understand

// function isTimeInRange(startTime, endTime, givenTime) {
//     const [startHour, startMinute] = startTime.split(":").map(Number);
//     const [endHour, endMinute] = endTime.split(":").map(Number);
//     const [givenHour, givenMinute] = givenTime.split(":").map(Number);

//     // Convert times to minutes for easier comparison
//     const startTotalMinutes = startHour * 60 + startMinute;
//     const endTotalMinutes = endHour * 60 + endMinute;
//     const givenTotalMinutes = givenHour * 60 + givenMinute;

//     // Check if the given time is within the specified range
//     if (startTotalMinutes <= endTotalMinutes) {
//         return givenTotalMinutes >= startTotalMinutes && givenTotalMinutes <= endTotalMinutes;
//     } else {
//         return givenTotalMinutes >= startTotalMinutes || givenTotalMinutes <= endTotalMinutes;
//     } 
// }

// // Example usage:
// console.log(isTimeInRange("10:00", "16:00", "12:30")); // Expected output: true
// console.log(isTimeInRange("20:00", "02:00", "23:45")); // Expected output: true
