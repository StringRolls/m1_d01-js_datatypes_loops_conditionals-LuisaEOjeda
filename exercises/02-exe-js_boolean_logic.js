// Practice boolean logic

// == compares just using value (loose or abstract equality)

let x = 5;
let y = "5";
console.log(`What is this: ${x == y}`); // ==> ??

// === compares using value and type (strict equality)

console.log(`What is this: ${x === y}`); // ==> ??

// falsy values - will evaluate as FALSE
// - false
// - 0
// - "" empty string
// - null
// - undefined
// NaN

// truthy values - will evaluate as TRUE
// true
// "0"
// "false"
// [] or {}
// 35 (any number)
// new Date()

// Guess the output
if('false') `Passed thingy is truthy`
else `Passed thingy is falsy` // => ??

// Guess the output
if(true || false){
  console.log("sooo true");
} else {
  console.log("maybe not so true")
}

// Write down what will these statements return:
console.log(true && false); // ==> ??
console.log(11 % 3 === 2); // ==> ??
console.log(false || true); // ==> ??
console.log(!true || false); // ==> ??
console.log(17 == '17'); // ==> ??
console.log(123 === '123'); // ==> ??
