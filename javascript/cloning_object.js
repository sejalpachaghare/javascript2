const circle = {
    radius:1,
    draw(){
        console.log('draw');
    }
};

// const another ={};
// for (let key in circle)
    // another[key]=circle[key] ;

// const anothor=Object.assign({},circle);

const another ={...circle};
console.log(another);    

let A=[1,2,3,4,5];
let b=[...A]

let B= new Set([1,2,3,4,5,6,5,4,3,2]);
let c=[...B]

console.log(c);

