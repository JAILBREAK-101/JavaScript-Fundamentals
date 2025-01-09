// Operators in JavaScript

// Concept that's used to perform different operations: Arithmetic, Logical, Comparison.

// Assignment Operator: When you want to declare a variable or assign a value to a variable.
let juice = "Chivita Active";

// Arithmetic Operator

// Addition
console.log(2 + 2);
console.log(4 + 8 + 16);

// Subtraction
console.log(17 - 9);

// Division
console.log(25 / 5);

// Multiplication
console.log(14 * 8);

// Modulus: Returns the remainder of any division.
console.log(8 % 2); // 0
console.log(25 % 5); // 0

// Raise to the Power of.
console.log(6 ^ 4);

// Math Object.
// An Inbuilt Object with different arithmetic Properties and Methods.

console.log(Math);

// Random Property
console.log(Math.random() + 1);


// Logical Operator
console.log("Logical Operator")

// AND, NOT, OR

// AND: Returns True as Output (From two inputs) only if both are True.

// AND: Input A: true AND  Input B: false Output: False
// AND: Input A: true AND  Input B: true Output: True
// AND: Input A: false AND  Input B: false Output: False
// AND: Input A: false AND  Input B: true Output: True

console.log("AND LOGICAL OPERATOR")
console.log(true && false) 
console.log(true && true) 
console.log(false && true) 
console.log(false && false) 

// Real-world Example of AND Logical Operator
// const studentAge = parseInt(prompt("Enter your age: "));

// if (studentAge >= 20 && studentAge <= 31) {
    // alert("You are too old");
// }

// The OR Operator
// OR: Returns True as Output (From two inputs) if either of the two are True.

// OR: Input A: true OR  Input B: false Output: True
// OR: Input A: true OR  Input B: true Output: True
// OR: Input A: false OR  Input B: false Output: False
// OR: Input A: false OR  Input B: true Output: True

console.log("The OR Operator");
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// Real-Worl Example of OR Logical Operator
// const selectedWears = ["Bags", "Shoes", "Shirts", "Pants"];

// // The User wants to remove from their list of selected wears.

// const wearToBeRemoved = prompt("Which wear do you want to remove?: ");

// if (selectedWears.includes(wearToBeRemoved) || selectedWears.includes("Bags") || selectedWears.includes("Shoes") || selectedWears.includes("Pants") || selectedWears.includes("Shirts")) {
//     // Remove the selected Item.
//     selectedWears.splice(selectedWears.indexOf(wearToBeRemoved), selectedWears.indexOf(wearToBeRemoved) + 1);

//     console.log(selectedWears);
// } else if (!(selectedWears.includes(wearToBeRemoved))) {
//     console.log("You did not select that wear");
// } 

// Comparison Operator.

// == and ===

// Double Equal To ==
// It allows the comparison of two values using their value e.g "99" is equal 99 using the ==.

console.log("99" == 99);

// Triple Equal To ===
// It allows the comparison of two values using their data types(Strict Typing).

// Real-World Example.

const dateOfBirth = parseInt(prompt("Enter your date of birth"));

if (isNaN(dateOfBirth)) {
    console.log("Invalid Date of Birth. Enter your date of birth again.");
} else {
    console.log("Valid Date of Birth.");
}

// Build a Calculator System that accepts only numbers using All the Operators (Covered in this video).