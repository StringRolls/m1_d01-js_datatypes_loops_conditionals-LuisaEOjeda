/** Practice conditionals
 *
 * Take user name and language as input (declare two variables)
 * Use console.log() method to output  a welcome message to the user using `if ...else if..else`
 * If the language is one of `French, Spanish, English` , show the welcome message. If not show `I am not sure what are you trying to do, sorry! 🍺"`
 * Do the same using a switch statement
 */


const language = "English"
// const name = ... <- Complete here and keep wriritng your code below

// 1A: if...else - simple solution

if (language === "spanish") console.log(`Hola, Martin`);
else if(language === "french") console.log(`Salut, Martin`);
else if (language === "english") console.log(`Hello, Martin`);
else console.log("I am not sure what are you trying to do, sorry! 🍺");

// 1B: if...else - more dynamic solution, asking for input from user using prompt()
const language = prompt("Please enter the language - (options: spanish, french, english): ");
const name = prompt("Please enter your name:");

if (language === "spanish") { // if we will have more than one thing to console or return we have to use curly braces
  console.log(`Hola, ${name}`);
  console.log("Something else");
}
else if(language === "french") console.log(`Salut, ${name}`);
else if (language === "english") console.log(`Hello, ${name}`);
else console.log("I am not sure what are you trying to do, sorry! 🍺");

// 2: switch
switch(language){
  case "spanish":
    console.log(`Hola, ${name}`);
    break;
  case "french":
    console.log(`Salut, ${name}`);
    break;
  case "english":
    console.log(`Hello, ${name}`);
    break;
  default:
    console.log("I am not sure what are you trying to do, sorry! 🍺");
}