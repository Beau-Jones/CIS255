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

    // NaN is a reserved word indicating that a number is not a legal number

    let o = 100 / "Apple";  // Trying to do arithmetic with a non-numeric string will result in NaN
    let h = NaN;
    let i = h / x; // Using NaN in an operation will result in NaN

    // The method isNan() will return whether the value is a number
    // NaN is considered a number using typeof

// Working w/ Strings in JS




// Conditional Statements 