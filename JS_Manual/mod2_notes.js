// ALL CODE TO BE RUN VIA THE BROWSER



// How to Declare Variables in JS

let message; // Declaring a variable using let or var
var messageTwo;
message = 'Hello'; // Assign the variable using the assignment operator (=)
alert(message); // Shows the variable content in the browser
console.log(message); // Logs the variable content to the console

        // Once declared, a variable can be changed with the assignment operator
        // Let is the new school way of declaring a variable, var is outdated

const myBirthday = '10/04/1996'; // Declaring an unchanging variable using const

        // For all variables, use good naming conventions such as camelCase
        // Variable names should be concise and describe the value well
        // Const values are named with capital letters and underscores for known values


// Operators in JS

let x = a + b; // Addition operator in JS 
let y = a - b; // Subtraction operator in JS 
let z = a * b; // Multiplication operator in JS 
let w = a / b; // Division operator in JS 
let v = a ** b; // Exponentiation operator in JS 
let q = a % b; // Modulus (remainder) operator in JS 
let u = a++; // Increment by 1 operator in JS 
let r = a--; // Decrement by 1 operator in JS 

let p = "10";
let t = 20;
let g = p + t; // Adding a String and a number will result in the second value being concatenated to the first
console.log(g); // Will log "1020" as a String;


// Working w/ Numbers in JS

let o = 100 / "Apple"; // Arithmetic with a non-numeric string will result in NaN

        // NaN is a number and will return number using typeof
        // The function isNaN() will tell you if a value is a number


// Working w/ Strings in JS

const bigmouth = 'I\'ve got no right to take my place…'; // Using a backslash before a character will maintain its place in the string quotations
`template literals can create multiline strings using backtics`; // Template literals avoid the need of escaping and string concatenation and they help with interpolation

let text = "Apple, Banana, Kiwi"; // The slice() method will return a string from the position of the first parameter to the second. Other methods like substring() do similar actions as slice();
let part = text.slice(7, 13); 

        // toUpperCase() and toLowerCase() will change the case of the argument respectively
        // A string can be converted to an array using the split() method

text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe

// Conditional Statements 

        // Comparison operators such as <, >, <=, >=
        // == is an equality operator, = is an assignment operator
        // != is not equal
        // Comparisons will return a boolean value like true or false
        // === compares values without converting type such as "5" and 5

alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1

let a = 0;
alert( Boolean(a) ); // false
        
let b = "0";
alert( Boolean(b) ); // true
alert(a == b); // true


// Use if to specify a block of code to be executed, if a specified condition is true
// Use else to specify a block of code to be executed, if the same condition is false
// Use else if to specify a new condition to test, if the first condition is false

// || means or, for testing one or another condition
// && means and, for testing multiple conditons at a time
// ! means not, for testing the negation of a condition

        // Syntax for a switch statement in JavaScript
switch(expression) {
        case x:
          // code block
          break;
        case y:
          // code block
          break;
        default:
          // code block
      }

// The ternary operator is a shorthand for an if statement, its syntax is as follows:
function getFee(isMember) {
        return (isMember ? '$2.00' : '$10.00');
      }
      
      //isMember is the condition, if true, the return value is 2.00, if false, the return value is 10.00


// Functions 

      // Declare and define a function by using the following syntax:
      function myFunction() {
        alert('hello');
      }
      
      // Invoke the same function using this syntax:
      myFunction(); // Argument gets placed inside parenthesis in applicable
      
      // Anonymous functions called without giving the function a name
      textBox.addEventListener('keydown', function(event) { 
        console.log(`You pressed "${event.key}".`);
        });   
      // The above function(event) function is an anonymous function passed as an argument into the eventlistener function
      
      // Arrow functions are used to pass anonymous functions using shorthand
      textBox.addEventListener('keydown', event => console.log(`You pressed "${event.key}".`));
      // Instead of using curly brackets, the arrow denotes the code in the function block

      // Scope

        // Global scope variables are defined outside of a function
        // Local scope variables are defined inside of functions
        // Global scope variables are accessible to every part of your code
        // Local scope variables are invisible to the global scope unless returned from the local function

     // Return Values
     function random(number) {
        return Math.floor(Math.random() * number);
     }
        // By returning, the result of the above function can be stored as a variable for further use 
        // In the case of a loop, the value can be returned for use in the next iteration of the loop

    // Default Values

     function showMessage(from, text = "no text given") {
        alert( from + ": " + text );
     }

        showMessage("Ann"); // Ann: no text given

        // An equal sign passed as an argument into a function declares the default value if called without an argument
        // You can also define behavior of a function without an argument by using undefined in the code block
        function showMessage(from, text) {
                if (text === undefined) {
                text = 'no text given';
        }

        alert( from + ": " + text );
        }
        // In this case, the behavior is determined by the if statement recognizing undefined

    // Call Stack

        // A call stack is used to organize the order in which functions are executed in a program
        // The call stack begins with the mainline, and functions are added on top of the call stack when they are encountered
        // The top of the call stack is next in line to be executed
        // Stack overflow occurs when there are too many functions in the call stack
        // The stack is executed top to bottom until it is empty

// Problem Solving

        // Understanding the problem
                // Understanding the problem is all about knowing what needs to be solved. We aren't solving the problem just yet
                // Define the problem, understand what your problem solving is inteded to solve.
        // Plan
                // In the planning phase, we determine what will constitute the solution to our problem
                // This includes elements like user interface, inputs, outputs, and the process the information will undertake
                // We can use pseudocode to break the program down into steps using English for the planning process
        // Divide and Conquer
                // Divide and conquer is all about implementing your solutions step by step
                // Begin by solving the least complex subproblems first, move onto bigger and more complex problems later
                // Break the big problems down and solve each of the smaller problems.

// Understanding Errors

        // Reference error
                // Occurs when we attempt to reference a variable that doesn't exist under the name being referenced within the current scope
        // Syntax error
                // Occurs when we don't use the language correctly. Basically a grammar error in the given language
        // Type error
                // Occurs when we attempt to modify data using techniques that don't apply to that type of data. For example, integers being treated like Strings, etc.


// Tips for writing clean code

        // Indentation, semicolons, line length, and naming conventions all contribute to clean (or unclean) code

        const x =       // x is the name of the variable, not very descriptive
        function(z) {
        let w = 0;z.forEach(    // w is a poor name, sum would be better. Semi colon in the middle of line also makes things confusing. Line too long
        function(q){            
                 w += q;
        });return w;    // Should be on 2 separate lines
        };

        x([2, 2, 2]);

        // Example of clean code

        const sumArray = function(array) {      // Clear variable declaration
                let sum = 0;            // Indentation for content of code block
                array.forEach(function(number) {
                  sum += number;        // Sum is clear variable name, know what it does
                });     // Semi colons at the end of each line, each line a statement
                return sum;
              };
              
              sumArray([2, 2, 2]);

        // Comments in code will contribute to cleanliness as well. Well placed comments make the code easier to read and understand
        

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

// Document Object Model (DOM)

        // Query Selectors
        // Element Creation
        // Appending Elements
        // Removing Elements
        // Altering Elements
        // Adding Inline Styles
        // Editing Attributes
        // Working with Classes
        // Adding Text Content
        // Adding HTML Content
        // How to defer a <script> tag until the page loads

                // getElementsByTagName
                // getElementsByClassName
                // getElementsById

// Events

        // 3 methods for implementing an onClick function for a button
        // Passing a parameter into your event listener function
        // Some useful events besides "click"