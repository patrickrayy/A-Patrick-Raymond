//Logical Operators
let a = 10;
let b = 12;

console.log(a < 15 && b > 10); // true
console.log(a > 15 && b > 10); // false
console.log(a < 15 || b > 10); // true
console.log(a > 15 || b > 10); // true
console.log(!(a < 15)); // false
console.log(!(a < 15 && b > 10)); // false

//Equality Comparison
const aString = '10';
const aNumber = 10;

console.log(aString == aNumber);  // true (loose)
console.log(aString === aNumber); // false (strict)

//Array Methods (Slice & Push)
const animals = ["Cat", "Dog", "Elephant", "Tiger", "Lion"];
console.log("Original array: ", animals);

// Slice
const slicedAnimals = animals.slice(1, 3);
console.log("Sliced array (1,3): ", slicedAnimals);

// Push
animals.push("Giraffe");
console.log("Array after push: ", animals);
