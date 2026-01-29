// function :  function is used to execute the block of code.

function add(num1,num2){
let result = num1 + num2 ;
console.log(result);
console.log("hello") // will not execute because any lines of code does not excecute after retur
}
add(10,20);

// function login (username){
//          console.log(login("hello"));
//     if (username === undefined) {
//          console.log("please enter username");
// }
//     return `${username} just logged in`;
// }
//         console.log(login("shravani"));

// // when your string is empty it gives undefined 

function calculate(...num1){
    return num1;
}
console.log(calculate(100,200,300));

// ...num1 : spread/rest operator which gives all values in function arguments in array format.

const info = {username : "shravani dake",
              age : 21
            };
            console.log();
function handleinfo(obj){
    console.log(`username is ${obj.username}`);
    console.log(`age is ${obj.age}`);
}
handleinfo(info);

const arr = [10,20,30,40];

function handlearray(obj1){
    console.log(`Array Elements are ${obj1}`);
    console.log(`first Element is ${obj1[0]}`);
}
handlearray(arr);