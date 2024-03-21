// let n="12:34 AM"
// let t=n.split(':')
// let a=t[0];
// let d=parseInt(t[1]);
// let b=t[1].split(' ')[1];

// if(isNaN(a)|| isNaN(d)|| a>23||d>59 || (b!=='AM'&&(b!=='PM'))){
//     console.log("INVALID NUMBER");
// }
// else{
//     console.log(t.join(':'));   
// }


// let a="23:15"
// let b="01:30"
// let c=a.split(":");
// let d=b.split(":");
// let e1=parseInt(c[0]);
// let e2=parseInt(c[1]);
// let f1=parseInt(d[0]);
// let f2=parseInt(d[1]);
// let k1=(e1*60)+e2;
// let k2=(f1*60)+f2;
// if(k1<k2){
//     console.log(k2-k1);
// }
// else{
//     console.log((24*60)-k1+k2);
// }


// Question: Implement a function to add a specified number of minutes to a given time and return the result in the "HH:MM" format.

// Sample Test Cases:
// javascript
// Copy code
// console.log(addMinutes("10:30", 90)); // Expected output: "12:00"
// console.log(addMinutes("23:45", 60)); // Expected output: "00:45"
// let a='23:45';
// let k1=60;
// let m=a.split(":");
// let m1=parseInt(m[0]);
// let m2=parseInt(m[1]);
// let k=(m1*60)+m2+k1 
// let n=k%1440;
// let l=Math.floor(n/60);
// let l1=n%60;
// console.log(`${String(l).padStart(2,0)}:${String(l1).padStart(2,0)}`);


// Question: Write a function to convert a given time from the 24-hour format ("HH:MM") to the 12-hour format ("HH:MM AM/PM").
// console.log(convertTo12Hour("13:30")); // Expected output: "1:30 PM"
// console.log(convertTo12Hour("22:15")); // Expected output: "10:15 PM"
// let a='13:30';
// let k=a.split(':');
// let l1=k[0];
// let l2=k[1];
// if(l1>12){
//     l1=l1-12;
//     console.log(`${String(l1).padStart(2,0)}:${String(l2).padStart(2,0)} PM`)
// }
// else{
//     console.log(`${String(l1).padStart(2,0)}:${String(l2).padStart(2,0)} AM`) 
// }


// Question: Implement a function that takes a duration in minutes and returns a string representing the duration in hours and minutes (e.g., "2 hours 15 minutes").
// console.log(formatDuration(150)); // Expected output: "2 hours 30 minutes"
// console.log(formatDuration(90)); // Expected output: "1 hour 30 minutes"
// let a=90;
// let b=a%60;
// let c=Math.floor(a/60);
// console.log(`${c} hours${b} minutes`);


// Question: Write a function to determine whether a given time falls within a specified range (inclusive) defined by two time strings (start time and end time) in the "HH:MM" format.

// Sample Test Cases:
// javascript
// Copy code
// console.log(isTimeInRange("10:00", "16:00", "12:30")); // Expected output: true
// console.log(isTimeInRange("20:00", "02:00", "23:45")); // Expected output: true  

let a='20:00';
let b='02:00';
let c='03:45';
let [a1,a2]=a.split(":").map(Number);
let [b1,b2]=b.split(":").map(Number);
let [c1,c2]=c.split(":").map(Number);

let k1=a1*60+a2;
let k2=b1*60+b2;
let k3=c1*60+c2;
if(k1<k2){
    console.log(k1<=k3 && k3<=k2);
}
else{
    console.log(k1<k3 || k2>k3);
}  

