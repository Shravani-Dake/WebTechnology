const balance = new Number(26);
console.log(balance);
console.log(typeof(balance));
console.log(balance.toString());
// used to make ecommerce wesites where precision value is so long. 2 indicates digits after point
console.log(balance.toFixed(2)); 
console.log(balance.toString.length); //length of string
const x = 1000000;
// by default prints digits in US standard
console.log(x.toLocaleString());
// to print digits in indian format
console.log(x.toLocaleString('en-IN')); 
// math : 
// abs : negative values converted into positive and positive remains as it is
console.log(Math.abs(-4));
// console.log(Object.math.abs(-4));
console.log(Math.round(-4.6)); // give round value
console.log(Math.ceil(-4.6)); // choose top values
console.log(Math.floor(-4.6)); // choose lowest values
console.log(Math.max(1,2,3,4)); //choose max value
console.log(Math.min(1,2,3,4)); // choose min value
// math.random() use 