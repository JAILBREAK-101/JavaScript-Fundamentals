console.log("JavaScript linked")

// Function Declaration

// Variable declared in a function during its declaration is known as a parameter
function changeBackgroundColor() {
    // Changes the background of the webpage
    document.body.style.backgroundColor = "blue";
    document.body.style.color = "white";
}

changeBackgroundColor();

// Function that takes is a value and performs an action
function calculateUserAge(userYearOfBirth) {
    // This function takes in the year of birth of each user that years and returns their ages after 10 years

    var userAge = 2024 - userYearOfBirth;
    console.log(userAge + 10);
}

// Running the function with different user years of birth.
calculateUserAge(1990); // Parameter passed into a function during execution is known as an argument
calculateUserAge(2000);
calculateUserAge(2002);
calculateUserAge(2006);
calculateUserAge(2009);

// Function that does not accept or take in a parameter but returns a value
function calculateAreaOfRectangle() {
    var length = 300;
    var breadth = 200;

    return length * breadth; // The return value
}

// When you return a value from a function, to see the function's value you have to store it as a variable or you can console.log it explicitly

const areaOfTriangle = calculateAreaOfRectangle(); // Make sure to execute the function as you store it in a variable

console.log(areaOfTriangle);

// String methods: Methods (functions) that can be performed on a string to manipulate the string


// NOTE: A function can either return only a value or return no value at all (you can't return more than one value)

// Once you run a function, it is terminated (ended) only after the action has been performed or a value has been returned or both.


let Man = {
    name: "John",
    age: 25
}

// Function that accepts a parameter (as an argument) and returns a value.
function describeHuman(human) {
    // This function takes in a human object and returns a string describing the human
    return `${human.name} is ${human.age} years old.`
}

const firstHuman = describeHuman(Man); // Man becomes the parameter: It doesn't have to be the same name, as long as the argument is passed into the same position as the paramter was defined, it's fine
console.log(firstHuman); // Prints it out to the console

// Advanced Functions

// Higher Order Functions: Functions that take in functions as parameters or and return functions as values. 
// In other words: Returning a Value but passing in a function

// create the function that'd be passed into the other function as an argument (parameter)
function loginFunction() {
    let isLoggedIn;

    // Return isLoggedIn based on the following condition
    if (2 > 1) { // Change from > to < to check the results from the functions (Higher Order Function)
        isLoggedIn = true;
    }
    else {
        isLoggedIn = false;
    }
    return isLoggedIn; // The function returns this value
}

function printsErrorMessage(loginFunction) {
    if (loginFunction() === true) { // execute the function being passed in as an argument in the condition that determines its value
        return "Success, user logged in";
    }
    else {
        return "Error, user not logged in"
    }
}

let userStatus = printsErrorMessage(loginFunction); // Do not pass in the function (parameter/argument) executed but as a declaration that'd be executed inside the function that needs it to perform certain actions.

console.log(userStatus); // Get the value based on the function that was passed into the other function as an argument.

// Higher order functions are not used this way by just passing values into them instead functions are passed into them
let higherOrderFunctionOne = printsErrorMessage(true); // gives us success, user logged in

console.log(higherOrderFunctionOne); // Gives us the correct value but has the wrong implementation in this context.

// Another Example of a Higher Order Function

// Function that returns other functions as values is a Higher Order Function

// In this example, we create a system to determine if a student is eligible to write the session's exam 
// based on their class attendance and whether they have paid their school fees.

// Step 1: Create the determinant function that checks class attendance
function determineStudentEligibility(noOfClassesAttended) {
    // Define the required minimum number of classes a student must attend to be eligible
    const eligibilityValue = 70; // The threshold is 70 out of 100 classes

    // Check if the student attended fewer classes than the required threshold
    if (noOfClassesAttended < eligibilityValue) {
        return "The student is not eligible to write the session's exam"; // Not eligible
    } 
    // Check if the student attended enough classes to meet or exceed the threshold
    else if (noOfClassesAttended >= eligibilityValue) {
        return "The student is eligible to write the session's exam"; // Eligible
    }
}

// Step 2: Create a function that uses the determinant function to return eligibility status
function returnStudentEligibility() {
    // Check if the student has fully paid their school fees
    const hasPaidSchoolFees = false; // This is a static value for demonstration purposes

    // If the student has paid their fees, proceed to check their class attendance
    if (hasPaidSchoolFees === true) {
        // Assume the student attended 80 classes (static value for now)
        return determineStudentEligibility(80);
    } 
    // If the student has not paid fees, eligibility cannot be determined
    else {
        return "Sorry, we can't return your eligibility status."; // Ineligible due to unpaid fees
    }
}

// Step 3: Create a dynamic function that lets the student input their attendance
function getEligibilityStatus(studentInputtedValue) {
    // Check if the student has paid their fees
    const hasPaidSchoolFees = true; // Assume fees are paid for this example

    if (hasPaidSchoolFees) {
        // Pass the student's inputted class attendance to the determineStudentEligibility function
        return determineStudentEligibility(studentInputtedValue);
    } else {
        return "Sorry, we can't return your eligibility status."; // Fees not paid
    }
}

// Example Usage:
// Static example of eligibility checking
const maleStudentStatus = returnStudentEligibility();
console.log(maleStudentStatus); // Output depends on the hasPaidSchoolFees variable

// Dynamic example with student-provided attendance input
const dynamicStatus = getEligibilityStatus(75); // Replace 75 with user input
console.log(dynamicStatus); // Output depends on the number of classes attended

// Exercise: Create a function that lets the student input the number of classes they've attended to make the returnStudentEligibility function more dynamic, e.g 1. getNoOfClassesAttended(studentInputtedValue); 2. determineStudentEligibility(getNoOfClassesAttended); 3. returnStudentEligibility(); // This returns the whole eligibility status based on the student's input (noOfClassesAttended) which is then used in the determineStudentEligibility function and finally returns the eligibility status (the final value)

// NOTE: Higher Order Functions can be more than 2 functions.