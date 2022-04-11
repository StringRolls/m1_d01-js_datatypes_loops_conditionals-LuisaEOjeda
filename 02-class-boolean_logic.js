// Class code examples
//console.log(right && left);

// Logical operators: AND
// if the left side is truthy return the left side
console.log(true && true); // => true
console.log(true && false); // => false
console.log(false && true); // => false
console.log(false && false); // => false


// Logical operators: OR
console.log(true || true); // => true
console.log(true || false); // => true
console.log(false || true); // => true
console.log(false || false); // => false

// Boolean operators do not return boolenas
console.log("cappucccino" && 4 + 2);

let firstName;

console.log(`Hola ${firstName || 'guest'}`);