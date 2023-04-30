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