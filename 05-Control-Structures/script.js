// Sequential Control Structure: Top to bottom approach to how your program is ran or executed in JavaScript

let simpleVariable = "Simple Value";

function simpleFunction() {
    return "Simple return value";
}

// NOTE: By default,  your javaScript program is sequential // Functional - Paradigm

// Selective Control Structure: Conditional Control Structure, allows us to perform an action, if a certain condition is either true.
// if (2 > 1) {
//     alert("The condition is true");
// } else {
//     alert("The condition is not true");
// }

// Restaurant Food Ordering Application:

// 1. We want to get the user's preference of food from the list of foods available.

// - Check if the user's preference is in the list of foods available. 
// - If it is, return the food (user's preference) from the food list with its price. If it's not, return "Food not available"

const inputElement = document.getElementById("input");

// Define the availableFoods Variable
const availableFoods = [
    "Pizza", "Burger", "Fries", "Salad", "Sandwich"
]

// Get the user's preference.
function getUserPreference() {
    // Receive the user's preference in string format.
    let preference = inputElement.value;
    // Store the preference in a variable to be used as a condition in the if statement.
    return preference;
}

function serveUserFood() {
    if (availableFoods.includes(getUserPreference())) {
        console.log(`Your food is ${getUserPreference()} and it costs $10.99`)
        // `Your food is ${preference} and it costs $10.99`
    } else {
        console.log("That is not available");
    }
}

// Voter's Registration
// - Get the user's age
// - Determine the user's eligibility (18 years or more)
// - Register the user if eligible

// const userAge = parseInt(prompt("Enter your age: "));

function determineUserEligibility() {
    if (userAge >= 18) {
        alert("You are eligible. Registered, Vote wisely");
    }
    else if (userAge < 18 && userAge >= 16) {
        alert("You are not eligible. Kindly submit your details to be notified on when the next registration would take place.")
    }
    else {
        alert("Sorry. You are not eligible to vote.")
    }
}

// determineUserEligibility();

// Increment: i++
// Decrement: i--
// ++i --i -> Alternative increment and decrement

// Iterative Control Structure: Also known as Loop Control Structure allows us to define a loop of sequence based on a certain condition that stays true and performs an action until it's false.
// ""For Loop, While Loop"". Do While Loop

// A Guessing game - Allow us to guess a number that the computer has generated based on the user's input (NO of steps: 4)

// const userInputNumber = parseInt(prompt("Enter a number"))
// const computerNumber = Math.ceil((Math.random()) * userInputNumber) + 1;

// console.log(computerNumber)

// for(let i = 4; i > 0; i--) {
//     let userGuess = parseInt(prompt("Type in your guess"));
//     if (userGuess === computerNumber) {
//         alert("You got the guess");
//         break;
//     } 
//     else {
//         alert(`You guessed wrong. You have ${i} steps left.`);
//     }
// }

// NaN stands for Not a Number.

for(let i = 1; i <= 5; i++) {
    console.log(i);
}

// The While Loop: While loop is an iterative control structure that will continue to execute as long as the specified condition is true

let count = 1;

while (count <= 5) {
    console.log(count);
    
    count++;
}

console.log("Break out of the loop");

// Do While Loop: The do while is the same as the while loop, only that it executes your code at least (first time) before it reads the condition
let input;
let numbers = [];

do {
    input = prompt("Type in3 a number (type 'exit' to stop): ");

    numbers.push(input);

    if (input !== "exit") {

        if (input = "yes") {
            let age = prompt("What's your age?: ");
            
            if (age) break;
        }
    }
    } while (input !== "exit"); 