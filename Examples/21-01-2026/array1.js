const superheros = ["Batman", "Ironman","Shaktiman","Spiderman"];
const cars = ["Swift","KIA","Fortuner","Verna"];

superheros.push(cars);
console.log("Push : "+superheros); //Batman,Ironman,Shaktiman,Spiderman,Swift,KIA,Fortuner,Verna

console.log("Index values : "+superheros[3]); //Spiderman

// gives the index of element 3 having index 2 means 3rd element is spiderman and 2nd index of it is i
console.log("Index of : "+superheros[3][2]); //i

//Array concatination : to join two arrays
const concat = superheros.concat(cars);
console.log(concat);

const arr_in_arr = [1,2,3,[4,5,6],7,8];
console.log("Array in Array : "+arr_in_arr);

//flat : doesnot change original array insted returns new array which is useful for nested data or array
// default value of flat is 1
const arr_in_arr1 = arr_in_arr.flat(Infinity);
console.log("Array in Array : "+arr_in_arr1);

const arr_in_arr2 = arr_in_arr.flat(1);
console.log("Array in Array : "+arr_in_arr2);

//Nested Array :
const nested_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
console.log(nested_arr);
console.log(nested_arr.flat(1));

//Data Scripting methods :

//Checks the given value is an array or not
console.log(Array.isArray("Shravani")); //false
//Splits element in single letters means converts objects like set,map,string into array
console.log(Array.from("shravani")); //
//returns empty array
console.log(Array.from({name:"shravani"})); //[]
//returns the key 
console.log(Object.keys({name:"shravani"})); //name
//returns the values
console.log(Object.values({name:"shravani"})); //shravani
//returns both key and values
console.log(Object.entries({name:"shravani"})); //[ [ 'name', 'shravani' ] ]

// create new array of given values no matters how many elements 
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ]

// difference between Array.of() and Array.from()
// Array.of() : converts values
// array.from() : converts values

//Array,String,Object,Function
