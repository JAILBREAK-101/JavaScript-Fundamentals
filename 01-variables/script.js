// Variables and Variables Declaration

/* Variables are containers that 
store a value in a memory location */

/* Creating a Variable:
    1. Using the Let keyword (In other words Let reserved keywords)

    2. Using the Var keyword

    3. Using the Const keyword (Creating a constant)
*/

// The let keyword lets us initialize and declare a variable that can be re-declared within the program.
let initialUser; // Variable Initialization

let user = "Tobi"; // Variable Declaration

// Variable re-declaration
user = "Oluwagbemiga";

// The var keyword is used within a block scope and cannot be accessed outside of that scope.

// Variables declared using the var keyword can be re-declared.

// Scope is known as the boundary, position or location of a particular piece of program within the whole program

function sendMessage() {
    var message = "Message sent"; // local variable

    message = "Message not sent";
    console.log(message);
}

sendMessage();

// The const keyword allows us to define constants which values don't change throughout the program's lifecycle.
const userLoggedIn = true;
console.log(userLoggedIn);

// In other words, the const keyword can be used to define variables in a block scope and outside of it.
function printUserAccountDetails() {
    const userAccountDetails = "50000 remaining";
    console.log(userAccountDetails);
}
printUserAccountDetails();

// The const keyword allows us to define constants that cannot be re-declared like that of the let and var keywords.

// A guessing game
function determineGuess() {
    // determines the guess of the user

    // User's guess

    // Computer's guess
}