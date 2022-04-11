const log = console.log;

/** Practice conditionals
 *
 * Take user name and language as input (declare two variables)
 * Use console.log() method to output  a welcome message to the user using `if ...else if..else`
 * If the language is one of `French, Spanish, English` , show the welcome message. If not show `I am not sure what are you trying to do, sorry! 🍺"`
 * Do the same using a switch statement
 */


const language = "French"
const userName = 'Lois Lane';

// 1: if...else - simple solution

if (language === 'English'){
    log(`Hey ${userName} Welcome to our portal!`)
} else if (language === 'French'){
    log(`Salut ${userName} Bienvenue a notre portal!`)
} else if (language === 'Spanish'){
    log(`Hey ${userName} Bienvenid@ a nuestro portal!`)
} else {
    log(`Sorry ${userName} I am not sure what are you trying to do! 🍺`)
}

// 2: switch

switch(language) {
    case 'English':
        log(`Hey ${userName} Welcome to our portal!`)
        break;
    case 'French':
        log(`Salut ${userName} Bienvenue a notre portal!`)
        break;
    case 'Spanish':
        log(`Hey ${userName} Bienvenid@ a nuestro portal!`)
        break;
    default:
        log(`Sorry ${userName} I am not sure what are you trying to do! 🍺`)
}
