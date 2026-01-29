// write code for switch case
let month = 12;
let result;

switch (month) {
    case 1:
        result = "January";
        break;
    case 2:
        result = "February";
        break;
    case 3:
        result = "March";
        break;
    case 4:
        result = "April";
        break;
    case 5:
        result = "May";
        break;
    case 6:
        result = "June";
        break;
    case 7:
        result = "July";
        break;
    case 8:
        result = "August";
        break;
    case 9:
        result = "September";
        break;
    case 10:
        result = "October";
        break;
    case 11:
        result = "November";
        break;
    case 12:
        result = "December";
        break;
    default:
        result = "Invalid Month Entered";
}
    document.getElementById("activity1").innerHTML =
    "<h3>Activity 1 : Switch Case</h3>" +
    "Month Number : " + month + "<br>" +
    "Result : " + result;

// how to use turnary operators in js
let price = 5000 ;
let ispartner = true ;
let discount = ispartner ? 0.2 : 0 ;
let final_price = price - (price * discount);
console.log(`Final Price After Discount is ${final_price}`);
document.getElementById("activity2").innerHTML = 
"<h3> Activity 2 : Turnary Operator </h3>" +
"Price : " + price + "<br>" +
"Result : " + final_price ;

// write a code for how to use loops in array 
// for loop 
let resultfor = "";
for (let ii = 1; ii <= 5; ii++) {
    resultfor += ii + " ";
}
document.getElementById("activity3").innerHTML =
    "<h3>Activity 3 : For Loop</h3>" +
    "Numbers from 1 to 5 : " + resultfor;

//while loop
let i = 1;
let resultwhile = "";

while (i <= 5) {
    resultwhile += i + " ";
    i++;
}
document.getElementById("activity4").innerHTML =
    "<h3>Activity 4 : While Loop</h3>" +
    "Numbers from 1 to 5 : " + resultwhile; 

//do-while loop
let p = 1;
let resultdo = "";

do {
    resultdo += p + " ";
    p++;
} while (p <= 5);
document.getElementById("activity5").innerHTML =
    "<h3>Activity 5 : Do While Loop</h3>" +
    "Numbers from 1 to 5 : " + resultdo;

//for of
let numbers = [10, 20, 30, 40, 50];
let resultof = "";
for (let value of numbers) {
    resultof += value + " ";
}
document.getElementById("activity6").innerHTML =
    "<h3>Activity 6 : for...of Loop</h3>" +
    "Array values : " + resultof;

// for in 
let resultin = "";
for (let index in numbers) {
    resultin += numbers[index] + " ";
}
document.getElementById("activity7").innerHTML =
    "<h3>Activity 7 : for...in Loop</h3>" +
    "Array values : " + resultin;

// for each
let resulteach = "";
numbers.forEach(function (value) {
    resulteach += value + " ";
});
document.getElementById("activity8").innerHTML =
    "<h3>Activity 8 : forEach Loop</h3>" +
    "Array values : " + resulteach;

/* how to use map function in js 
map() creates a new array
It does not change the original array
Used when we want to transform each element
*/
// Multiply each element by 2
let number1 = [1, 2, 3, 4, 5];
let newNumbers = number1.map(function (value) {return value * 2;});
document.getElementById("activity9").innerHTML =
    "<h3>Activity 9 : map() Function</h3>" +
    "Original Array : " + number1.join(" ") + "<br>" +
    "After map() : " + newNumbers.join(" ");

/*
how to use filter function in js 
filter() returns a new array
It keeps elements that match a condition
Original array does not change
*/
// Filter even numbers
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers2.filter(function (value) {
    return value % 2 === 0;
});

document.getElementById("activity10").innerHTML =
    "<h3>Activity 10 : filter() Function</h3>" +
    "Original Array : " + numbers2.join(" ") + "<br>" +
    "Even Numbers : " + evenNumbers.join(" ");

// write code for arrow function with 2 examples
// example 1 :
let num = [1, 2, 3, 4, 5];
let squareNumbers = num.map(num => num * num);
document.getElementById("activity11").innerHTML =
    "<h3>Activity 11 : map() Function using arrow function </h3>" +
    "Original Numbers : " + num.join(" ") + "<br>" +
    "Square Numbers : " + squareNumbers.join(" ");

// example 2 :  
const add = (a, b) => {
    return a + b;
};
let num1 = 50;
let num2 = 50;
document.getElementById("activity12").innerHTML =
    "<h3>Activity 12 : Addition using Arrow Function</h3>" +
    "Number-1 : " + num1 + "Number-2 : " + num2 + "<br>" +
    "Addition : " + add(num1, num2);

// for of and for in difference for oral 
document.getElementById("activity13").innerHTML =
        "<h3>Activity 13 : For..of & For..in </h3>" +
        "For..of : used when we want data/value.<br>" +
        "For..in : used when we want key/index";

/* how to use truthy and falsy values in js with examples
JavaScript converts values to true or false in conditions
Falsy values: false, 0, "", null, undefined, NaN
Truthy values: everything else (1, "text", [], {})
Used in if conditions, loops, and logical operators
Common in validation and decision making
*/
function checkFalsy() {
    let value = 0;
    if (value) {
        return "This is a Truthy value";
    } else {
        return "This is a Falsy value";
    }
}
function checkTruthy() {
    let value = 1;
    if (value) {
        return "This is a Truthy value";
    } else {
        return "This is a Falsy value";
    }
}
document.getElementById("activity14").innerHTML =
    "<h3>Activity 14 : Truthy or Falsy Values</h3>" +
    "Value = 0 : " + checkFalsy() + "<br>" +
    "Value = 1 : " + checkTruthy();

