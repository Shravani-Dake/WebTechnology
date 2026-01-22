/* stack : this memory used for primitive datatypes like string number boolen 
           it menas copy of value is given.
           when we assign one variable to another then changing does not affect to others.
*/
let myoutubename = "SSD";
let newmyoutbename = myoutubename;
console.log(myoutubename);
console.log(newmyoutbename);
myoutubename = "ABC";
console.log(myoutubename);

/* heap :  memory used for non-primitive datatypes like objects
           reference or address is shared.address
           objects are stored in when we assign one onother to another variable reference is copied not the value.
           if we change one both variables keeps changes.
*/
let user1 = {fname:"Shravani", age:21, Id:303};
let user2 = user1 ;
console.log(user1);
console.log(user1.Id);
console.log(user2.Id);
user2.Id = 305 ;

