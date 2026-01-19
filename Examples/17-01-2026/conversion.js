// 1) String to Number
let strNum = "123";                 // Declare first
let num1 = Number(strNum);          // Convert string to number
console.log(num1, typeof num1);     // 123 "number"

// Using parseInt()
let num2 = parseInt(strNum);
console.log(num2, typeof num2);     // 123 "number"

// Using parseFloat()
let strFloat = "45.67";
let num3 = parseFloat(strFloat);
console.log(num3, typeof num3);     // 45.67 "number"


// 2) Number to String
let numberValue = 999;              // Declare number first

let str1 = String(numberValue);     // Convert number to string
console.log(str1, typeof str1);     // "999" "string"

let str2 = numberValue.toString();  // Another way to convert number to string
console.log(str2, typeof str2);     // "999" "string"


// 3) Boolean Conversions
let isLoggedIn = true;               // Declare boolean first

let boolToStr = String(isLoggedIn); // Convert boolean to string
console.log(boolToStr, typeof boolToStr); // "true" "string"

let boolToNum = Number(isLoggedIn); // Convert boolean to number
console.log(boolToNum, typeof boolToNum); // 1 "number"

// String to Boolean
let strBool1 = "true";
let strBool2 = "";

let result1 = Boolean(strBool1);    // Non-empty string → true
let result2 = Boolean(strBool2);    // Empty string → false

console.log(result1, typeof result1); // true "boolean"
console.log(result2, typeof result2); // false "boolean"


// 4) Other Conversions
let nullValue = null;
let nullToNum = Number(nullValue);  // null → 0
console.log(nullToNum, typeof nullToNum); // 0 "number"

let undefValue = undefined;
let undefToNum = Number(undefValue); // undefined → NaN
console.log(undefToNum, typeof undefToNum); // NaN "number"

let arr = [10, 20, 30];
let arrToStr = String(arr);         // Array → "10,20,30"
console.log(arrToStr, typeof arrToStr); // "10,20,30" "string"

let obj = { name: "Asha" };
let objToStr = String(obj);         // Object → "[object Object]"
console.log(objToStr, typeof objToStr); // "[object Object]" "string"

let invalidStr = "abc";
let invalidToNum = Number(invalidStr); // "abc" → NaN
console.log(invalidToNum, typeof invalidToNum); // NaN "number"
