console.log("Data Types in JavaScript");

// Fundamental Data types or Primitive Data Types in JavaScript

/*
    1. String Data type: Define values (numbers, letters and symbols). It's also known as a collection of (stream) values within a double or single quote. e.g "Mr President", "false", '51', "This is the second video in this series", "'Single Quote' Double Quote" e.t.c

    2. Number (or Integer) Data type: Defines values that are numeric (whole numbers), float (decimal), long or short and other forms of numbers. e.g 5, 5.2, 3.142, e.t.c

    3. Boolean Data type: Defines values that are truthy or falsy in nature. e.g true, false, on, off, up, down, yes, no. They are more logical in nature.

    4. Undefined Data type: Defines values that do not exist or they are not defined. e.g let unknownUser, let username = undefined;

    5. Null Data type: Defines values that are empty, null, or zero. e.g let no_of_fruits = null;
*/

// Derived Data Types or Non-Primitive Data Types in JavaScript

// Another name for Derives or Non-Primitive Data Types in JavaScript is known as "Data Structures"

/*
    1. Arrays Data Structure: An array is a (sequential) collection of values that have different (primitive) data types. e.g A crate of eggs, A school bag containing containing different items. ["Pen", "Book", "Apple", "Water Bottle", "Laptop"], ["Timi", 60, false, null, undefined]

    2. Objects Data Structure: An object is an item that has properties. These properties are referred to as the attributes that form the characteristics of that object. Objects also have behaviours, and these behaviours are known as methods which can be performed on those objects. 

    let ObjectName = {
        key: "value",
    }
    
    Examples: Man = {
        name: "James",
        age: 40,
        gender: Male,
        isRetired: false
    }
*/

// Code to re-inforce data types and data structures knowledge.

// String Data Type
let studentName = "John";

const LordOfLords = "God";

var drink_type = "Fanta";

console.log(studentName);
console.log(LordOfLords);

// Variable naming and their conventions
// PascalCase

// camelCase

// snake_case

// Number Data Type
const pi = 3.142;

let yearOfBirth = 2002;

let number_of_students = 81;

console.log(yearOfBirth);

// Boolean Data Type
let isLoggedIn;
isLoggedIn = true;
console.log(isLoggedIn);

// Null Data Type
const no_of_classes_attended = null;

console.log(typeof no_of_classes_attended);

// Undefined Data Type
let userGuess = undefined;

// Stictly Typed, Dynamically typed, Loosely Typed and Strongly Typed Language or Concept in JavaScript.