// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23)
let myNewCreatedDate = new Date(2023, 0, 23, 5, 3)
let myNewDate = new Date("01-14-2023")
console.log(myCreatedDate.toDateString());
console.log(myNewCreatedDate.toLocaleString());
console.log(myNewDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let anotherDate = new Date()

console.log(anotherDate);
console.log(anotherDate.getMonth())


anotherDate.toLocaleString('default', {
    weekday: "long",
    
})


