const user = {
    username: "saad",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}
console.log(user.username); // Output: saad
// console.log(user.getUserDetails());
console.log(this); // Logs the global object (in browsers, it's the window object)

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("saad", 12, true)
const userTwo = new User("Javascript", 11, false)
console.log(userOne.constructor); // Logs the User function
// console.log(userTwo);

// Using `instanceof` operator
console.log(userOne instanceof User); // true, because userOne is created using the User constructor
console.log(userTwo instanceof User); // true, because userTwo is created using the User constructor
console.log(user instanceof User); // false, because user is not created using the User constructor

// The moment we use "new" keyword an empty object is created which is called as instance. For example: console.log(this); an empty object will be created when we run this line --> {}.
// A constructor function call is called because of the new keyword. What it does is that it packs all the arguments inside that constructor.
// This keyword is inject inside that argument
// We get those argumnents inside the function


