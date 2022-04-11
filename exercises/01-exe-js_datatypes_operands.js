// Practice JS datatypes and operands

// 1. Create variables with your first name, last name and age.
let firstName = 'john';
let lastName = 'doe';
let age = 29;

// 2. Make the first letters of your first and last name capitalized.

let capFirstName = firstName.charAt(0).toUpperCase() + firstName.substring(1);
console.log(capFirstName); // John

let capLastName = lastName.charAt(0).toUpperCase() + lastName.substring(1);
console.log(capLastName); // Doe

// 3. Concatenate your first and last name (after capitalizing them) to give your full name.

let fullName = `${capFirstName} ${capLastName}`;

// other: 
// let fullName = capFirstName + ' ' + capLastName;

console.log(fullName); // John Doe

// 4. Use console.log() method to output the sentence with the following structure: `My name is __________ and I am  _____ years old.`

console.log(`My name is ${fullName} and I am ${age} years old.`);

// All primitive data types are immutable - meaning, once a primitives are created, they can't be modified.

// Example from lesson:
let city = "miami";
console.log(city[0]); // <== m
city[0] = "M"; // let's capitalize the first letter
console.log(city); // ==> miami

city = "berlin";
console.log(city); // <== berlin

city[0] = "B";
console.log(city); // ==> berlin

const message = "Don't be sad, be happy!";
console.log(message.slice(0,3, "don"));
console.log(message); // ==> "don't be sad, be happy!"

const statement = 'I love JavaScript!';
const subStatement = statement.substr(2, 9);
console.log(subStatement); // ==> "love Java"

subStatement[0] = subSstatement[0].toUpperCase();
console.log(subStatement); // ==> "love Java"