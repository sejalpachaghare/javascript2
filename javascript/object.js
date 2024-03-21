const mysym =Symbol("key1");

const jsuser={
    name:"sejal",
    "last_name":"Pachaghare",
    age:18,
    location:'morshi',
    [mysym]:"my key 1 symbol",
    islogin:false,
    email:"sejalpachaghare@gmail.com",
    lastlogic:['monday','saturday']

}

jsuser.gretting=function(){
    console.log("hello js user");
}

jsuser.gretting2=function(){
    console.log(`hello js user, ${this.name}`);
}

// freeze is used for we can not change in our object  
// Object.freeze(jsuser); 

// console.log(jsuser.email);
// console.log(jsuser["email"]);

// console.log(jsuser.last_name);
// console.log(jsuser[mysym]);

// jsuser.email="navneet@gami.com";
// console.log(jsuser.email);

// console.log(jsuser);

// console.log(jsuser.gretting());

// console.log(jsuser.gretting2());

const car={
    make:"India",
    model:"new",
    year:"2004",
    color:"White",
    mileage:60,
    price:60000
}

console.log(car["make"]); 

// console.log(car.make);

// console.log(car["model"]);
// console.log(car.model);

car.fualtype="gasoline";
car.color="blue";

// console.log(car); 

car.drive=function(distance){
    console.log(`The car has driven ${distance} miles.`);
}

const person={
    name:'sejal',
    age:18,
    gender:'Female'
}

for (let i in person){
    console.log(person[i]);

}
console.log(car["drive"]())

