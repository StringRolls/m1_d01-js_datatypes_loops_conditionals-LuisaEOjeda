// Class code examples

// Variable declaration (individual)
let name

console.log('Variables are initialised with undefined', name)


// Variable declaration (grouping)
let age, phone, year


// Variable initialization
let dog = 'Fuffy'
console.log('My dog\'s name is ', dog)

dog = 'Salsicha'
console.log('Mi perro ahora se llama', dog)



// Variable type
console.log('Variable type is: ', typeof dog)
dog = 77
console.log('Now it becomes: ', typeof dog)
dog = false
console.log('And finally is: ', typeof dog)



// const 
const country = 'Spain'
console.log('The const country has this value ', country, ' and you cannot change it')


  // NaN
  let grams = 95
  let resultGrams = grams / 'batman'

  console.log('The NaN type is the result of an incongruent operation -> ', resultGrams)



  // Module operator
  console.log('The remainder of 4 / 2 is ', 4 % 2)
  console.log('The remainder of 7 / 2 is ', 7 % 2)
  console.log('Is 6 a multiple of 3? -> ', 6 % 3 === 0)



  // Assignment operator
  let kilograms = 34
  console.log('Weight: ', kilograms)
  kilograms += 3                                // => kilograms = kilograms + 3
  console.log('... weight now ->', kilograms)

  kilograms++                                   // => kilograms = kilograms + 1
  console.log('... and now ->', kilograms)


   // Simple string
   const name = 'Cappuccino'


   // Backticks tring
   const sentence = `My name is ${name}`
   const sentence2 = `The result is ${10 / 2}`

   let customer = { firstName: 'Foo', lastName: 'Kim' };
   let message = `Hello ${customer.firstName} ${customer.lastName}!!`;
   console.log(message)


   // String length porperty
   let lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eos nam quis unde a odit, iste veniam, voluptatem officia minus sunt delectus. Expedita suscipit corrupti voluptatibus voluptatum nemo neque molestiae.'
   console.log('This lorem text is', lorem.length, 'characteres')


   // String .charAt() method
   const greeting = 'Hello there!';
   console.log(greeting.charAt(0)); // <== H
   console.log(greeting.charAt(1)); // <== e
   console.log(greeting.charAt(5)); // <== " "
   console.log(greeting.charAt(11)); // <== !
   console.log(greeting.charAt(12)); // <== "" as an empty string


   // String .indexOf() method
   const message2 = "Don't be sad, be happy!";
   console.log(message2.indexOf("Don't")); // <== 0
   console.log(message2.indexOf('t')); // <== 4
   console.log(message2.indexOf('fuffy')); // <== -1


   // String .substring() method
   const message3 = "Don't be sad, be happy!";
   let withSubstring = message3.substring(0, 3);
   console.log(withSubstring); // <== Don: rteurns string neetween first and last index


   // String .substr() method
   let withSubstr = message3.substr(2, 3);
   console.log(withSubstr); // <== n't: rteurns the second number of characters from the first index


   // String .startsWith() method
   const str = 'To be, or not to be, that is the question.';
   console.log(str.startsWith('To be')); // true
   console.log(str.startsWith('not to be')); // false
   console.log(str.startsWith('not to be', 10)); // true


   // String .endsWith() method
   console.log(str.endsWith('question.')); // true
   console.log(str.endsWith('to be')); // false
   console.log(str.endsWith('to be', 19)); // true


   // String .includes() method
   console.log(str.includes('to be')); // true
   console.log(str.includes('question')); // true
   console.log(str.includes('nonexistent')); // false
   console.log(str.includes('To be', 1)); // false

