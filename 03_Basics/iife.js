// Immediately Invoked Function Expressions (IIFE)
// Problems arise due to pollution of the global scope. Many times, to remove the pollution of that global scope IIFE is used


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Saad')