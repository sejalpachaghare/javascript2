// var ages=[10,20,30,40];


// let b=ages.filter(test);

// function test(x){
//     return x>18
// }

// console.log(b);

var ages = [10, 20, 30, 40];

function test(arr) {
    return {
        filteredArray: arr.filter(x => x > 18),
    };
}

let b = test(ages);

console.log(b);

const number =[1,2,-1,3];
const filterres=number.filter(function(value){
    return value>=0;
})
console.log(filterres);


