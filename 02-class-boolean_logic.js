// Class code examples


        // Comparison operators
        console.log(4 > 2); // => true
        console.log(3 >= 3); // => true
        console.log(4 == '4'); // => true
        console.log(4 === '4'); // => false


        // Logical operators: OR
        console.log(true || true); // => true
        console.log(true || false); // => true
        console.log(false || true); // => true
        console.log(false || false); // => false
        console.log(false || 4 > 2); // true


        // Logical operators: AND
        console.log(true && true); // => true
        console.log(true && false); // => false
        console.log(false && true); // => false
        console.log(false && false); // => false
        console.log(true && 4 > 2); // true


        // Logical operators: NOT
        console.log(!true)  // => false
        console.log(!false) // => true
