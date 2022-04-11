// Class code examples


        // const age = prompt("Welcome to Ironhack cinema. How old are you?")

        // if (age <= 16) {
        //     console.log("You have a teenager discount.")
        // }

        // if (age > 16 && age <= 65) {
        //     console.log("Sorry, you don't have any discount :(")
        // }

        // if (age > 65) {
        //     console.log("You have a senior citizen discount :)")
        // }

        // console.log("That's all. Bye.")






        // // Equivalent:
        // const age = prompt("Welcome to Ironhack cinema. How old are you?")

        // if (age <= 16) {
        //     console.log("You have a teenager discount.")
        // } else if (age >= 65) {
        //     console.log("You have a senior citizen discount :)")
        // } else {
        //     console.log("Sorry, you don't have any discount :(")
        // }

        // console.log("That's all. Bye.")









        // // Nesting
        // const userCard = confirm("Do you have a member\'s card?")

        // if (userCard === true) {

        //     const userAge = prompt("How old are you?")

        //     if (userAge > 0 && userAge <= 15) {
        //         console.log("You have a 15% discount, yay!")
        //     } else if (userAge <= 55) {
        //         console.log("Bummer, you have no discount :( ")
        //     } else {
        //         console.log("You have a 45% discount as a senior")
        //     }

        // } else {
        //     console.log("Become a member and enjoy discounts!")
        // }

        // console.log("Thank you for participating")










        // // Switch
        // const method = prompt('Indica un método del objeto string para obtener su descripción')

        // const lowerCaseMethod = method.toLowerCase()

        // switch (lowerCaseMethod) {
        //     case "repeat":
        //         console.log(`El método "${method}" repite un string`)
        //         break
        //     case "substring":
        //     case "substr":
        //     case "slice":
        //         console.log(`El método "${method}" retorna una sección del string`)
        //         break
        //     case "replaceall":
        //         console.log(`El método "${method}" reemplaza`)
        //         break
        //     default:
        //         console.log(`Método "${method}" no registrado en el sistema...`)
        // }

        // console.log("Gracias por participar")





        // Switch (example 2)
        const name = prompt('Favorite Game of Thrones main character:')
        let house = ''

        switch (name) {
            case 'Khal Drogo':
                house = 'Dothraki Horselord'
                break
            case 'Daenerys':
                house = 'Targaryen'
                break
            case 'Jon Snow':
            case 'Sansa':
            case 'Arya':
                house = 'Stark'
                break
            default:
                house = 'other'
        }

        console.log(`Your favorite character is from the house ${house}.`)


