console.log("Go to ATM");

function checkBalance() {
  console.log("Checking balance...");
}

function withdrawMoney() {
  console.log("Withdrawing money...");
}

function printReceipt() {
  console.log("Printing receipt...");
}

// Synchronous execution (step by step)
checkBalance();
withdrawMoney();
printReceipt();

console.log("Transaction complete");

console.log("Start");

//delay using busy wait
function sleep(ms) {
  let start = Date.now();
  while (Date.now() - start < ms) {
    // blocking loop (busy wait)
  }
}

sleep(3000); // blocks for 3 seconds

console.log("End");