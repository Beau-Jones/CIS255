// Arrays

        // Creating Arrays
              // Arrays are commonly declared using the const variable
              const dogs = ["Hamilton", "Rufus", "Fido", "Spot"];

              // Array declaration spanning multiple lines

              const cars = [
                "Saab",
                "Volvo",
                "BMW"
              ];

              // Array declaration by each individual element

              const collection = [];
                cars[0]= "Saab";
                cars[1]= "Volvo";
                cars[2]= "BMW";

              // Array declaration using the new keyword

              const brands = new Array("Saab", "Volvo", "BMW");

        // Accessing Array Elements, including first and last

              // Use the index number to access individual elements
              let car = cars[0]; // First element assigned to the car variable

              // 0 is the first element of the array. You can access the last by using array.length or other technique
              let daily = cars[cars.length - 1];

        // Changing an Array Element

                cars[0] = "Toyota"; // Chagnes the first element to Toyota
              
        // Length Property

                // The length property of an array return the number of elements of an array
                const fruits = ["Banana", "Orange", "Apple", "Mango"];
                let length = fruits.length; // Returns 4


        // Looping over Array Elements

                // For loops in JavaScript look a lot like other for loops
                let text = "<ul>";
                for (let i = 0; i < fruits.length; i++) {
                  text += "<li>" + fruits[i] + "</li>";

                // You can also use the forEach() method
                fruits.forEach(myFunction); // Notice the forEach method takes a function as an argument
                
                function myFunction(value) {
                        text += "<li>" + value + "</li>";
                      }

        // Difference between Arrays & Objects
                // In JavaScript, arrays use numbered indexes. They are a special type of object
                // In JavaScript, objects use named indexes
                // Arrays use values, while objects use key-value pairs
                      
        // Converting Arrays into Strings
                //  The JavaScript method toString() converts an array to a string of (comma separated) array values
                const fruits = ["Banana", "Orange", "Apple", "Mango"];
                document.getElementById("demo").innerHTML = fruits.toString();

                // Returns Banana,Orange,Apple,Mango

                // Also use join() but you can specify the separator
                const fruits = ["Banana", "Orange", "Apple", "Mango"];
                document.getElementById("demo").innerHTML = fruits.join(" * ");

                // Returns Banana * Orange * Apple * Mango

        // push(), pop()
                // pop() method removes the last element of an array and returns it
                const fruits = ["Banana", "Orange", "Apple", "Mango"];
                let fruit = fruits.pop(); // Fruit would be "Mango"
                // push() method adds a new element to the end of an array
                fruits.push("Kiwi"); // New array would be ["Banana", "Orange", "Apple", "Mango", "Kiwi"]             

        // shift(), unshift()
                // shift() method removes the first element of the array, shifting all other elements down an index
                let fruit = fruits.shift(); // Returns "Banana"
                // unshift() method adds a new element to the beginning of an array and pushes all other down the line
                fruits.unshift("Lemon"); // Adds "Lemon" to start of array

        // Concatenating/Merging Arrays
                // concat() method merges two arrays
                const myGirls = ["Cecilie", "Lone"];
                const myBoys = ["Emil", "Tobias", "Linus"];

                const myChildren = myGirls.concat(myBoys);

        // Flattening Arrays
                // flat() method flattens an array, reducing the depth of its elements
                const arr1 = [1, 2, [3, 4]];
                arr1.flat();
                // [1, 2, 3, 4]

                const arr2 = [1, 2, [3, 4, [5, 6]]];
                arr2.flat();
                // [1, 2, 3, 4, [5, 6]]

                const arr3 = [1, 2, [3, 4, [5, 6]]];
                arr3.flat(2);
                // [1, 2, 3, 4, 5, 6]

                // Multiple dimensional elements are being reduced to the specified depth

        // splice(), slice()
                // splice() method adds new items to an array. it can also be used to remove elements
                      const fruits = ["Banana", "Orange", "Apple", "Mango"];
                      fruits.splice(2, 0, "Lemon", "Kiwi");
                // The first parameter (2) defines the position where new elements should be added (spliced in)
                // The second parameter (0) defines how many elements should be removed
                // The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added
                // The spliced array is returned

                // slice() method creates a new array with the removed elements. It doesn't modify the source array
                      const fruits = ["Banana", "Orange", "Apple", "Mango"];
                      const citrus = fruits.slice(1);
                // The slice() method can take two arguments like slice(1, 3).
                // The method then selects elements from the start argument, and up to (but not including) the end argument.

// Loops

        // .map()
                // map() method takes a function and executes it on each element of an array
                function toUpper(string) {
                        return string.toUpperCase();
                      }
                      
                      const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];
                      
                      const upperCats = cats.map(toUpper);
                      
                      console.log(upperCats);
                      // [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]

        // .filter()
                // filter() method takes a function that executes on each element and returns those that meet the conditons of the function
                function lCat(cat) {
                        return cat.startsWith('L');
                      }
                      
                      const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];
                      
                      const filtered = cats.filter(lCat);
                      
                      console.log(filtered);
                      // [ "Leopard", "Lion" ]

        // for Loop
                // The for loop iterates through specified elements in an array and executes a block of code with the element being the argument
                for (initializer; condition; final-expression) {
                        // code to run
                      }
                // Initializer - set to number variable, incremented for each iteration
                // Condition - specifies condition for when the loop should stop looping
                // Final-expression - usually serves to increment the intializer after every loop

        // for ... of Loop
                // The for ... of loop is a shorthand of the for loop specifically for looping through EACH element
                const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

                for (const cat of cats) { // For each cat of the cats array
                console.log(cat);
                }

        // break Statement
                // A break statement can exit a for loop before the exit condition is met
                // This is useful if we are looking for an element that meets a conditon and we don't need to keep looking through the array

        // continue Statement
                // The continue statement works similarly to break, but breaks to the next iteration        

        // while Loop
                // The while loop runs a block of code over and over until a condition is met.
                initializer
                while (condition) {
                // code to run

                final-expression // The final expression serves to change the conditon
                }
              

        // do ... while Loop
                // The do ... while loop does the same thing as the while loop, but guarantees the block of code will run atleast once
                initializer
                do {
                 // code to run

                final-expression
                } while (condition)

// Description of Test Driven Development

        // Test driven development is the process of writing tests for each piece of functionality in your code.
        // A test serves to ensure the code has the intended outcome. Test are written for a variety of conditons and expected outcomes.
        // If those outcomes are met when tested, the code passes the tests. Having specific tests mean we don't have to manually test variables.
        // The variables for testing are supplied through the tests.
