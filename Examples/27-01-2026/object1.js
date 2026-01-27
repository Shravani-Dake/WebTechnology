// singleton

const user1 = { 
        id :1234,
        isLogin : true
};

// objectinside object
const regularUser = {
    email : "shravanidake17@gmail.com",
    username : 
    {
        fullName : {fname : "shravani", sname : "Dake"}    
    }
};

console.log(regularUser);
console.log(regularUser.username.fullName.fname);