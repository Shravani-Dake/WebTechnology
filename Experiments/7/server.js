const express = require("express");
const app = express();
const port = 4000;

const users = [
    { id: 303, name: "Shravani", age: 20, email:"shravanidake17@gmail.com" },
    { id: 302, name: "Taslima", age: 21, email:"jamadartaslima302@gmail.com"},
    { id: 304, name: "Arya", age: 19, email:"patilarya304@gmail.com" },
    { id: 305, name: "Trupti", age: 22, email:"truptizore305@gmail.com" },
    { id: 306, name: "Neha", age: 20, email:"nehapatil306@gmail.com" },
    { id: 307, name: "Ankita", age: 22, email:"ankitamane307@gmail.com" },
    { id: 308, name: "Siddhi", age: 21, email:"siddhichavan308@gmail.com" },
];

app.get('/user', (req, res) => {
  res.send(users)
});

app.get("/user/:id", (req, res) => {
    const userId = parseInt(req.params.id);

    const user = users.find(u => u.id === userId);

    if (user) {
        res.send(user);
    } else {
        res.status(404).send("User not found");
    }
});



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});