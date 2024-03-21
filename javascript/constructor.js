var student1 = {
    firstName : "Vikki",
    lastName:'Kumar',
    age:25,
    class:5
}

// var student2 = {
//     firstName : "Vishal",
//     lastName:'Kumar',
//     age:22,
//     class:3
// }


function student(first,last,age,cls){
    this.firstName= first,
    this.lastName = last,
    this.age=age,
    this.class=cls 
} 

var student3=new student('lucky','varma',33,6);
student3.nationality='INdian';

student3.name=function(){
    return this.firstName+" "+this.lastName;
}

console.log(student3.name());  
