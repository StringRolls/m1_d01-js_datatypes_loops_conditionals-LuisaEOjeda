// Class code examples

// Variable declaration (individual)
let name;

console.log("Variables are initialised with undefined", name);

// Variable declaration (grouping)
let age, phone, year;

// Variable initialization
let dog = "Fuffy";

console.log("My dog's name is ", dog);

dog = "Salsicha";
console.log("Mi perro ahora se llama", dog);

typeof dog;

console.log(
  typeof 123,
  typeof "hola",
  typeof undefined,
  typeof null,
  typeof false
);

const cappuccino = "cappuccino";

//cappuccino = 'coffee';

console.log(cappuccino);

let betterCappuccino = "cappuccino with extra cacao";

betterCappuccino = "American coffee";
console.log(betterCappuccino);

// JS basic operator

console.log("assign", (betterCappuccino = "Ok that/s enought"));
console.log("equality", betterCappuccino == "ok tht/s enough");

// String template literals
let firstName = "Luisa";
const sentence = `My name is ${firstName}`;
const sentence2 = `The result is ${10 / 2}`;

let customer = { firstName: "Foo", lastName: "Kim" };
let message = `Hello ${customer.firstName} ${customer.lastName}!!`;
console.log("messsage ----->", message);
console.log("customer ----->", customer);

// remainder operator

console.log("The remainder of 4 / 2 is ", 4 % 2);
console.log("The remainder of 7 / 2 is ", 7 % 2);
console.log("The remainder of 7 / 3 is ", 7 % 3);
console.log("The remainder of 7 / 4 is ", 7 % 4);
console.log("The remainder of 7 / 5 is ", 7 % 5);
console.log("Is 6 a multiple of 3? -> ", 6 % 3 === 0);
console.log("Is 6 a multiple of 3? -> ", 543262623 % 2 === 0); // Quick trick to see if a number is even
console.log("Is 6 a multiple of 3? -> ", 543262623 % 2 !== 0); // Quick trick to see if a number is even
console.log("Is 6 a multiple of 3? -> ", !(543262623 % 2 === 0)); // Quick trick to see if a number is even

// string length
/// primitive data types ARE INMUTABLE
// but they can use reading methods 
let lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eos nam quis unde a odit, iste veniam, voluptatem officia minus sunt delectus. Expedita suscipit corrupti voluptatibus voluptatum nemo neque molestiae.";

console.log("This lorem text is", lorem.length, "characteres");

lorem[0] = 'l';

console.log('>>>>>>', lorem);

// string methods

const greeting = 'Hello there!';
// String .charAt() method
console.log(greeting.charAt(1)); // <== e
console.log(greeting.charAt(0)); // <== H
console.log(greeting.charAt(11)); // <== !
console.log(greeting.charAt(5)); // <== " "
console.log(greeting.charAt(12)); // <== "" as an empty string

// String .indexOf() method
const message2 = "Don't be sad, be happy!";
console.log(message2.indexOf("Don't")); // <== 0
console.log(message2.indexOf('t')); // <== 4
console.log(message2.indexOf('fuffy')); // <== -1

// String .substring() method
// the second parameter represents the index in the string
const message3 = "Don't be sad, be happy!";
let withSubstring = message3.substring(0, 3);
console.log(withSubstring); // <== Don: rteurns string beetween first and last index
console.log(message3.substring(2,3));

console.log(2, message3.length)

//console.log(message3[message3.length]);---> Will return undefined since the length of the array is greater than the index
console.log(message3[message3.length -1]);

// String .includes() method
const str = "To be, or not to be, that is the question.";
console.log(str.includes('to be')); // true
console.log(str.includes('question')); // true
console.log(str.includes('nonexistent')); // false
console.log(str.includes('T', 1)); // false
