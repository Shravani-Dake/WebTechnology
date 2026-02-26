//fetching user data

console.log("Fetching user data...");

function fetchUser() {
  setTimeout(() => {
    console.log("User data received");
  }, 3000);
}

fetchUser();
console.log("Continue doing other work...");

console.log("Start");
setTimeout(() => {
  console.log("Message after 2 seconds");
}, 2000);
console.log("End");