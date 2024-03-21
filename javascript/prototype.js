var Mobile = function (model_no){
    //  instances member 
    this.model = model_no ;
    this.price=3000;
}
var samsung = new Mobile('galaxy');
var nokia = new Mobile('3310');

// classname.prototype.key = 'value' ; 

// prototype member
Mobile.prototype.color='white';

console.log(samsung);
console.log(nokia); 

console.log(samsung.color);

