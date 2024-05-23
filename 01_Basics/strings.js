const name = "Saad"
const repoCount = 24

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Saad-sk-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Saad    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://saadkhan0105.github.io/Saadkhan_resume/"

console.log(url.replace('github.io', 'com'))

console.log(url.includes('saad'))
console.log(url.includes('sundar'))

console.log(gameName.split('-'));