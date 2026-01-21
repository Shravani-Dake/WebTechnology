//Array
let myarray = [0,1,2,3,4,5,6,7,8,9];
console.log("My Array : "+myarray);

console.log(typeof(myarray));

const arr = new Array(1,2,3);
console.log(arr[1]);

//Array Methods

// adds new element in existing array at last position
arr.push(4);
console.log("Added 4 : "+arr);

// Delete last element in existing array
arr.pop();
console.log("4 Deleted : "+arr);

// shifts all elements an added at first position
arr.unshift(9); 
console.log("9 Added at first : "+arr);

// Delete first element in array
arr.shift();
console.log("9 Deleted : "+arr);

// to check element is present in array or not 
console.log("Checks 1 is exist in array or not : "+arr.includes(1));

// to check the index of given element 
console.log("Checks index of 2 : "+arr.indexOf(2));

// slice and split use in array
