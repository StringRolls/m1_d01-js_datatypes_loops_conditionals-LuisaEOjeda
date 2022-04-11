// Class code examples



        // while

        // let i = 0
        // while (i <= 100) {
        //     console.log(i)
        //     i++
        // }




        // // while
        // let value = 0

        // while (value < 10) {
        //     value = prompt('Input a value greater than 10...')
        // }

        // console.log('Finally, dude!')





        // // basic for loop from 0 to 100
        // for (let i = 0; i <= 100; i++) {
        //     console.log(i);
        // }



        // console.log('----- Foreword -----')

        // // for loop to iterate text
        // const text = 'Fuffy'

        // for (let i = 0; i < text.length; i++) {
        //     console.log(text.charAt(i))
        // }


        // console.log('----- Backword -----')

        // // reverse
        // for (let i = text.length - 1; i >= 0; i--) {
        //     console.log(text.charAt(i))
        // }








        // for loop special words
        for (let i = 0; i <= 100; i++) {

            if (i === 17) {
                console.log('-- Ignoring the remaining instructions in the iteration --')
                continue
            }

            if (i === 31) {
                console.log('-- Abandoning the loop --')
                break
            }

            console.log('We are inside the iteration', i)
        }

        console.log('We ahve finished the loop')


