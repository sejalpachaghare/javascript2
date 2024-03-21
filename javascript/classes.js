class jaanwar{ 
    constructor(name){
        this.name=name ;
        console.log('hello i am running');
    }
    eats(){
        console.log("i am eating");
    }
    running(){
        console.log("i am running");
    }
}
class cat extends jaanwar{
    // constructor(){
    //     super();
    // }
    // abc(){
    //     console.log('')
    // }
}

let animal=new jaanwar("dog");
let cat1=new cat()
// animal.eats();
// animal.running();
cat1.eats()
console.log(cat1); 

