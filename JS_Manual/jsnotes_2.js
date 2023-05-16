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


