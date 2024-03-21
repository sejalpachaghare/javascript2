class emp{
    constructor(n){
        this.name=n;
    }

    msg(){
        console.log("hiii....");
    }
    
}
class manager extends emp{
    constructor(p,d){
        super(p);
        this.department=d; 
    }
    ms
    info(){
        super.msg();
        console.log(this.name+"is manager of deparment"+this.department);
    }

}

let mng1=new manager('sejal','web development');
console.log(mng1); 


