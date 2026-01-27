// Create current date object
let now = new Date();
console.log("Current Date & Time:", now);

// ---------------- GET METHODS ----------------
console.log("Year:", now.getFullYear());        // Current year
console.log("Month (0-11):", now.getMonth());   // 0 = Jan, 11 = Dec
console.log("Date:", now.getDate());            // Day of month
console.log("Day (0-Sun):", now.getDay());      // Day of week

console.log("Hours:", now.getHours());          // Hours
console.log("Minutes:", now.getMinutes());      // Minutes
console.log("Seconds:", now.getSeconds());      // Seconds
console.log("Milliseconds:", now.getMilliseconds()); // Milliseconds

// ---------------- SET METHODS ----------------
let futureDate = new Date();

futureDate.setFullYear(2026);
futureDate.setMonth(5);      // June (0 based)
futureDate.setDate(15);
futureDate.setHours(10);
futureDate.setMinutes(30);

console.log("Updated / Future Date:", futureDate);

// ---------------- FORMAT METHODS ----------------
console.log("toDateString():", now.toDateString());
console.log("toTimeString():", now.toTimeString());
console.log("toLocaleString():", now.toLocaleString());

// ---------------- TIMESTAMP CONCEPT ----------------

// Current timestamp (milliseconds since 1 Jan 1970)
let currentTimestamp = Date.now();
console.log("Current Timestamp:", currentTimestamp);

// Timestamp from Date object
let timeFromDate = now.getTime();
console.log("Timestamp from Date Object:", timeFromDate);

// Convert timestamp back to date
let convertedDate = new Date(currentTimestamp);
console.log("Converted Timestamp to Date:", convertedDate);

// ---------------- REAL-TIME USAGE EXAMPLES ----------------

// 1. Login Time Tracking
let loginTime = Date.now();
console.log("User Login Timestamp:", loginTime);

// 2. Order Placed Time
let orderTime = new Date();
console.log("Order Placed At:", orderTime.toLocaleString());

// 3. Calculate Time Difference (Execution Time Example)
let startTime = Date.now();

// Simulating some work
for (let i = 0; i < 1000000; i++) {}

let endTime = Date.now();
let timeTaken = endTime - startTime;

console.log("Time Taken (in milliseconds):", timeTaken);

// 4. Expiry Date Example
let expiryDate = new Date();
expiryDate.setDate(expiryDate.getDate() + 7); // 7 days later
console.log("Expiry Date after 7 days:", expiryDate.toDateString());


/* 
What is a Timestamp?
A timestamp is a number that represents a specific date and time.
In computers, time is stored as the number of milliseconds passed since
So instead of storing date as : 27-01-2026 10:30 AM
the system stores something like: 1706338200000
1706338200000This number is the timestamp.
*/

//Order Placed & Delivery Tracking
let orderPlaced = Date.now();
console.log("Order Placed Timestamp:", orderPlaced);

//Expiry / Validity Checking
let now1 = Date.now();
let expiry = now1 + (24 * 60 * 60 * 1000); // after 1 day
console.log("Expiry Timestamp:", expiry);
console.log("Expiry Date:", new Date(expiry));
