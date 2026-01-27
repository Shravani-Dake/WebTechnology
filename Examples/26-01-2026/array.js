// Create an array
let numbers = [10, 20, 30, 40, 50];
let names = ["Amit", "Riya", "Neha", "Karan"];

console.log("Original numbers:", numbers);
console.log("Original names:", names);

// ---------------- ADD & REMOVE METHODS ----------------
s
// push() - add at end
numbers.push(60);no
console.log("After push:", numbers);

// pop() - remove from end
numbers.pop();
console.log("After pop:", numbers);

// unshift() - add at beginning
numbers.unshift(5);
console.log("After unshift:", numbers);

// shift() - remove from beginning
numbers.shift();
console.log("After shift:", numbers);

// splice() - add / remove at specific position
numbers.splice(2, 1, 25);  // remove 1 element at index 2 and add 25
console.log("After splice:", numbers);

// slice() - copy part of array
let part = numbers.slice(1, 4);
console.log("slice(1,4):", part);

// ---------------- SEARCH & CHECK METHODS ----------------

// indexOf()
console.log("indexOf 30:", numbers.indexOf(30));

// includes()
console.log("includes 40:", numbers.includes(40));

// find()
let found = numbers.find(n => n > 25);
console.log("find (>25):", found);

// findIndex()
let findIdx = numbers.findIndex(n => n > 25);
console.log("findIndex (>25):", findIdx);

// ---------------- ITERATION METHODS ----------------

// forEach()
console.log("forEach values:");
numbers.forEach(n => console.log(n));

// map() - create new array
let doubled = numbers.map(n => n * 2);
console.log("map (doubled):", doubled);

// filter() - select values
let filtered = numbers.filter(n => n > 25);
console.log("filter (>25):", filtered);

// reduce() - combine values
let sum = numbers.reduce((total, n) => total + n, 0);
console.log("reduce (sum):", sum);

// ---------------- STRING CONVERSION METHODS ----------------

// join()
let joined = names.join(" - ");
console.log("join():", joined);

// toString()
console.log("toString():", names.toString());

// ---------------- SORTING & REVERSING ----------------

// sort()
let sorted = [...numbers].sort((a, b) => a - b);
console.log("Sorted:", sorted);

// reverse()
let reversed = [...numbers].reverse();
console.log("Reversed:", reversed);

// ---------------- MERGE & COPY METHODS ----------------

// concat()
let merged = numbers.concat([70, 80]);
console.log("concat():", merged);

// spread operator (copy)
let copy = [...numbers];
console.log("Copied array:", copy);

// ---------------- CHECK TYPE ----------------

// isArray()
console.log("Is numbers an array?:", Array.isArray(numbers));

// ---------------- LENGTH ----------------
console.log("Length of array:", numbers.length);
