//Fetch
//Fetch is buildin js method used to make http request
//it returns Promise me arya mad ahee.\

// fetch("URL");
// fetch("HTTPS://jsonplaceholder.typicode.com/users");

fetch("https://jsonplaceholder.typicode.com/users/3")
  .then((response) => {
    return response.json(); // convert to JSON
  })
  .then((data) => {
    console.log(data); // actual users data
  })
  .catch((error) => {
    console.log(error);
  });

/*
 activity
 //async example with fetch method 
 fetch diplaying names in html list 
 how to async await with fetch() 
 fetch post show only frst 5 records
 fetch create a fetch promise manually resolve after 3 sec and rejct after 3 sec
 diff betw promise and call back
 what is fetch method in js?
 what does fetch return?
 why do we use response.json method ?
 diff between then and catch and async and await
 what is promse chaining?
  
  */

