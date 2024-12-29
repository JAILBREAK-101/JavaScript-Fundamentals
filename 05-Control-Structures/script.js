// Control Structures Code will be.

// Sequential
const age = 10;

const name = "Mike";

console.log(name);

console.log(age);

// Functions: Follow sequential control structure once they are executed.
function runAction() {
    return "Your name is Mike, and you are 10 years of age";
}

console.log(runAction());

// Selective or Conditional
// Makes use of specific keywords: if, else, switch, and ternary operator.

// If Statement (IF ELSE).
let userPreference = prompt("Enter your preference (food): ");

if (userPreference == "Rice") {
    console.log("Fish has been added to your Rice");
} else {
    console.log("No Fish was added because you are not eating rice");
}

// A Voter's System -> It checks for the validity of user's age and hands them a voter's card.
// const userAge = parseInt(prompt("Enter your age: "));

// The Condition to determine their elibility.
if (userAge >= 20) {
    alert("You are eligible and registered. Thank you.");
} 
else if (userAge < 20 && userAge >= 16) {
    alert("Not Eligible. Kindly submit your details as we have a procedure for you.");
}
else {
    alert("You are not eligible. Please come back after 4 years.");
}

// Repeatitive or Branching (Looping)
// For Loop, While Loop and Do While Loop.

// for, while, do while.

// For Loop: We use this when the number of iterations (loops) is known beforehand.

console.log("For Loop")
// Example: Print numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

const students = ["John", "Mark", "Tobi", "Ebube"];

// Print out the names
for (let i = 0; i <= students.length; i++) {
    console.log(students[i]);
}

// While Loop: This loop is used when the number of iterations (loops) is not known beforehand.
console.log("While Loop")

// Example: Print numbers from 1 to 5
let i = 1; // Starting point

while(i <= 5) {
    console.log(i);
    i++;
}

// Real World Example: Guessing Game. Allows them only 3 trials after a wrong guess to get the secret number.
const secretNumber = 10;
const guessInput = document.getElementById("input");
const displayMessage = document.getElementById("Display");
const trialsDisplay = document.getElementById("NoOfTrials");

// Initialze the trials counter
let trials = 3;

document.querySelector("button").addEventListener('click', () => {
    while (trials > 0) {
        const guess = parseInt(guessInput.value);

        // Validate the Input. (If what the user entered in is a number)
        if (isNaN(guess)) {
            displayMessage.innerText = "Please enter a valid number";
            break;
        }

        // Check if the guess is correct
        if (guess === secretNumber) {
            displayMessage.innerText = "You guessed right";
            trialsDisplay.innerText = ""; // Clear any trial display value because the user guessed right.
            break;
        } else {
            trials--;
            // If the number of trials is still greater than 0
            if (trials > 0) {
                displayMessage.innerText = "You guessed wrong";
                trialsDisplay.innerText = `You have ${trials} trials left.`;
            } 
            // If the number of trials is equal to 0
            else {
                displayMessage.innerText = "Game Over!. You ran out of trials.";
                trialsDisplay.innerText = "";
            }
        }

        break;
    }
})

// Do While Loop: This loop is used when you want the (iteration) loop to execute at least once before checking the condition

// Example: Print Numbers from 1 to 5
let j = 1;

console.log("Do While Loop Example");

do {
    // Perform the first action (print 1)
    console.log(j);
    j++;
} while (j <= 5);

// An Authentication System. Simulate (Model) A User Login Process.
let correctPassword = "test123";
let userInput;
let loginAttempts = 5; // Try at most 5 times to login.

do {
    // Prompt the user to enter their password
    userInput = prompt(`Enter your password. You have ${loginAttempts} number of attemps left: `);
    
    // If the user Password is correct based on their input.
    if (userInput === correctPassword) {
        alert("Login successful.");
        break;
    } else {
        loginAttempts--;
        if (loginAttempts > 0){
            alert("Incorrect password. Try again.");
        } else {
            alert("You have used up all your login attempts. Account Locked.");
        }
    }
} while (loginAttempts > 0);

// Exercise: Build the Guessing Game using the For Loop, While Loop, and Do While Loop.  Use the following rules:

// - The user has 7 attempts to guess the number.
// - The number to guess is between 1 and 70.
// - The user should be asked to type in a valid number 3 times after typing in an invalid.