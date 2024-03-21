// primitive data types are value types
// primitive are copied by their value 
let number =10;
function increase(number){
    number++;
}
increase(number);
console.log(number);

// object are copied by reference
let obj ={valus:10};
function increase(obj){
    obj.valus++;
}
increase(obj);
console.log(obj);

