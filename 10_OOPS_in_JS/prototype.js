// let myName = "saad     "
// let mySurname = "khan    "
// console.log(myName.truelength);



let myHeros = ["Thor", "SpiderMan"]

let heroPower = {
    Thor: "Hammer",
    SpiderMan: "Sling",

    getSpiderPower: function() {
        console.log(`Spider power is ${this.SpiderMan}`);
        
    }
}

Object.prototype.saad = function(){
    console.log(`Saad is present in all objects`);
    
}
Array.prototype.heySaad = function(){
    console.log(`Saad says hello`);   
}

// heroPower.saad()
// myHeros.saad()
// myHeros.heySaad()
// heroPower.heySaad()


// Inheritance

const User = {
    name: "Saad",
    email: "xyz@google.com"
}
const Teacher = {
    makeVide: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = User

// Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "SaadKhan      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True lentgh is: ${this.trim().length}`);    
}
anotherUsername.trueLength()
"Saad".trueLength()
"BlackCoffee".trueLength()