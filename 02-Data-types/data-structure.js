// Arrays
let boxItems = ["T-Shirt", "Laptop", "$50,000"];

// console.log(boxItems)

// Array Properties: Length
// console.log(boxItems.length);

// Data Type of Array: Object
// console.log(typeof boxItems);

// Index or Position of Array Elements
// console.log(boxItems[0]);

// Properties of Arrays
// console.log(boxItems.length);

// Methods of Arrays
// console.log(boxItems.push("Tooth Brush")); // Add a new element to the back of the back of the array as the last element.

// console.log(boxItems);

// console.log(boxItems.unshift("Slippers")); // Adds a new element to the front of the array as the first element.

// console.log(boxItems);

// console.log(boxItems.pop());

// console.log(boxItems);

// console.log(boxItems.shift());

console.log(boxItems);

// Object Data Structure.
let Man = {
    name: "James",
    age: 40,
    gender: "Male",
    isRetired: false
}

// Printing the object
console.log(Man)

// Accessing Man Object property: name
console.log(Man.name);

// Accessing Man Object property: age
console.log(Man.age);

// Accessing Man Object property: gender
console.log(Man.gender);

// Accessing Man Object property: isRetired
console.log(Man.isRetired);

// printing the object
console.log(Man)

// Using an Object Constructor Function to create the Object
console.log(Object(Man));

// Turning our string variable into an object by sing the Object Constructor Function
const stringObject = "Humphrey";

console.log(Object(stringObject));

// Methods in Objects
const laptop = {
    brand: "Apple",
    model: "MacBook Pro",
    price: 2000,
    isOnSale: false,
    
    // Method in our object: Functions defined in an object
    displayDetails() {
        return this.brand + " has a model of " + this.model + " and a price of " + this.price;
    }
}

console.log(laptop);