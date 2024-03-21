const age=[18,25,6,50,70];
//  frist method 
function test(x){
    return x*2 ;
}
let b=age.map(test)
// console.log(b); 

// second method 
function sample(age){
    return(age.map(x=>x*2));
}
let z=sample(age);
console.log(z); 


function trial(x){
    return x>30;
}
let m=age.filter(trial);
// console.log(m);

function mock(x){
    return(age.filter(x=>x>30));
}
// console.log(mock(age));  

function kill(age){
    return (age.reduce((x,y) => x+y, 0));
}
// console.log(kill(age)); 


var a=NaN ;
console.log(typeof(a));

console.log(age.map(x=>x*2));
function sample(x){
    return x*2;
}
console.log(age.map(sample));

