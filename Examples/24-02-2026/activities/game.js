// Guess the Output Game (Node.js version)

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Guess the output order");

rl.question("Enter your guess order: ", function(userGuess) {

  function syncAsyncDemo() {
    console.log("A");   // Sync

    setTimeout(() => {
      console.log("B"); // Async (Macrotask)
    }, 0);

    Promise.resolve().then(() => {
      console.log("C"); // Async (Microtask)
    });

    console.log("D");   // Sync
  }

  console.log("\nActual Output:");
  syncAsyncDemo();

  setTimeout(() => {
    let correct = "A D C B";

    if (userGuess.trim().toUpperCase() === correct) {
      console.log("\n Correct Guess!");
    } else {
      console.log("\n Wrong Guess!");
      console.log("Correct order is:", correct);
    }

    rl.close();
  }, 100);

});