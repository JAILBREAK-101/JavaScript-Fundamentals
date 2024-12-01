// JavaScript Operators: Arithmetic, Logical, Assignement, Comparison

// ALU: Arithmetic Logic Unit

// We can perform Addition, Subtraction, Multiplication, Assignment Operations, Division, Logical Operations such as: NOT, AND, OR

// Addition
console.log(2 + 2); // 4

// Subtraction
console.log(5 - 2); // 3

// Multiplication
console.log(6 * 8); // 48

// Division
console.log(25 / 5); // 5

// More Arithmetic Operators
console.log(4 % 2); // 0 Modulus

console.log(4 ** 2); // 16 Exponent

// PEDMAS or BODMAS

// Logical Operators: AND, OR, NOT

// If something is true, then it is not false

// If something is false, then it is not true

// const isLogical = false;

// AND only gives true, if both sides are true.

    // AND: true AND true = True
    // true AND false = False
    // false AND true = False
    // false AND false = False
if (2 ** 2 == 4 && 4 * 4 == 16) {
    console.log("This is a correct expression");
}  else {
    console.log("This is not a correct expression");
}

// OR: OR only gives true, if either sides is true
    // : true OR false = True
    //  : false OR true - True
    // : false OR false = false
    // : true OR true = True

// const userAge = parseInt(prompt("Enter your age"));

// const validityChecker = 22;

// if (userAge > 16 || userAge == validityChecker) {
//     console.log("You are eligible");
// } else {
//     console.log("Sorry, try again next time.")
// }

// NOT Operator: Negative Operator.
// This allows us to type the opposite of everything.
const isLoggedIn = false;

console.log(!!isLoggedIn)

if (!isLoggedIn) {
    console.log("App quitting....");
} else {
    console.log("Welcome user")
}

// Assignment Operator is mostly used in variables. (=)

// It's used to assign a value or set of values (like arrays) to a variable

let YCombinatorName = "Genix-Js";
// Keyword VariableName (LHS) Assignment Operator(=) VariableValue(RHS)

// Comparison Operator 

// NOTE: Every Operator, when used returns a boolean value of true or false, depending on the condition except from the Arithmetic Operators.

// - (Greater than, 
// - [Less Than, Equal To [By value, By data type], 
// - Greater or Equal To, 
// - Less than or Equal To);

// NOTE: Equal to symbol for comparing two or more values is not the assignment operator (=) but differemt.

// Greater Than Comparison Operator
console.log(2 > 1);

console.log(26 > 40);

// Less Than Comparison Operator
console.log(80 < 100);

// Allow the Admin of a School to 
// type in the age of the number of students 
// in a class room and calculate the average age of each students.

let numberOfStudents = parseInt(prompt("Enter the number of students in your classroom"));

const numberOfStudentsLimit = 5;

let numberOfStudentsArray = [];

if (numberOfStudents <= numberOfStudentsLimit) {
    for(let i = 1; i <= numberOfStudents; i++) {
        var eachStudentScore = parseInt(prompt(`Enter score for student ${i}`))

        // Make use of an array method.
        // Array.Push()

        numberOfStudentsArray.push(eachStudentScore);
    }

    let sumOfStudentScores;

    let averageOfStudentsScores;

    // Calculate the Average of the Number of Students
    for(let i = 0; i <= numberOfStudentsArray.length; i++) {
        sumOfStudentScores = numberOfStudentsArray.reduce((0, numberOfStudentsArray[i], i, numberOfStudentsArray));

        // averageOfStudentsScores = sumOfStudentScores / numberOfStudentsArray.length
        console.log(sumOfStudentScores);
    }

}

console.log(numberOfStudentsArray)


while (numberOfStudents > numberOfStudentsLimit) {

    alert("Please enter within the limit - a maximum of 5 students.");

    numberOfStudents = parseInt(prompt("Enter the number of students in your classroom"));

    if (numberOfStudents <= numberOfStudentsLimit) {
        for(let i = 1; i <= numberOfStudents; i++) {
            var eachStudentScore = parseInt(prompt(`Enter score for student ${i}`))

            // Make use of an array method.
            // Array.Push()
    
            numberOfStudentsArray.push(eachStudentScore);
        }
    }
}
