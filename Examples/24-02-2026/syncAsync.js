/*
Synchronous : it is synchronous programming.
where task executes one after another. 
each task wait for prevvious task to finish. 
it is sequencial behaviour.
it causes blocking event.
javascript is by default synchronous and single threaded.
used to wait for task to complete doesnot block thread.
not used in company level because of its some drawbacks. 

Asynchronous : it is Asynchronous programming.
some tasks can takes some times like API calling, database dada retriving, reading file with time given.
js doesnot wait. it moves to next line.
where task does not need to wait for previous task execution.
it is non sequencial behaviour or non blocking behaviour.
it improves responsiveness.
it does not causes blcoking event. means task can run without blocking main thread.
keywords to declare asynchronous method allows use of await inside the method.
used in fetching data from server,reading file.
settimeout() : it is asynchronous will wait for given time. and will print next line and after that 
it will print inside code in function after given timestamp.
it means that in below example it will execute start then end and after 2 sec it will print inside code
*/ 

//sync
console.log("Start");
function add(a,b){
    return a+b;
}

let result = add(10,20);
console.log(result);
console.log("End");


//async
console.log("Start");
setTimeout(()=>{
            console.log("Inside Timeout");
},2000);
console.log("End");

/*
Activities : 
guess the output game
blocking and non blocking example 2 for each
real life company use of async and sync.
API fetch method use krun activity kara.
*/