let mydate = new Date();
console.log(mydate);
console.log(typeof(mydate));
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toLocaleDateString()); //date-month-year


//timestamp : 
//when we create pool in application then we use timestamp

let mytime = Date.now();
 console.log(mytime); 
 console.log(Date.now()); //convert milisec
 console.log(Date.now()/1000); //convert sec
 console.log(Math.floor(Date.now()/1000)); // lowest value
 let newd = new Date();
 console.log(newd);
 console.log(newd.getDate());
 console.log(newd.getDay());
 console.log(newd.getMonth());
 console.log(newd.getFullYear());
 console.log(newd.getUTCDate());
 console.log(newd.getUTCDay());
 console.log(newd.toLocaleString('default',{weekDay :"long",}));
console.log(newd.toLocaleString('default',{weekday :"long"}));
