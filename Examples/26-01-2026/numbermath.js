//Number Methods : used to convert numbers, format decimals, and check numeric values.

//Number() : converts values into number.
//convert user input (string) into a number for calculations.
let a = "25" ;
let b = Number(a);
console.log(b);   //25

//parseInt() : Converts value into an integer. 
// When only whole numbers are needed (age, count, quantity).
let x = "25" ;
let y = parseInt(x);
console.log(y);   //25

//parseFloat() : Converts value into a decimal number.
// Used for prices, percentages, marks, etc.
let c = "25.25" ;
let d = parseFloat(c);
console.log(c);   //25.25

//toFixed() : Rounds a number to given decimal places.
// For displaying money values like ₹123.45
let num = 3.14159;
console.log(num.toFixed(2));  //3.14

//Math Methods : used for calculations, rounding, and random numbers.

//Math.round() : Rounds to nearest integer.
// used when final result should be a whole number.
console.log(Math.round(4.6));   //5

//Math.floor() : Rounds down to nearest integer.
// Used in indexing, discount calculations.
console.log(Math.floor(4.9));  //5

//Math.ceil() : Rounds up to nearest integer.
// used when minimum value is required.
console.log(Math.ceil(4.1));

//Math.max() and Math.min()
console.log(Math.max(10, 45, 3));
console.log(Math.min(10, 45, 3));

//Math.random() : Generates a random number between 0 and 1 (not including 1).
let r = Math.random();
console.log(r);

/*Why do we use Math.random()?
• Generate OTP
• Create random IDs
• Shuffle questions in exams
• Games (dice, cards, scores)
• Lottery systems
• Captcha generation
*/

/*Generate random number between 1 and 10
Explanation:
Math.random() → 0 to 0.99
* 10 → 0 to 9.99
floor() → 0 to 9
+1 → 1 to 10
*/
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log("Random number between 1 and 10: " + randomNum);

//OTP Generation (Bank / App Login)
let otp = Math.floor(Math.random() * 9000) + 1000;
console.log("Generated OTP: " + otp);
