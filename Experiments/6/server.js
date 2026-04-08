const express = require("express");
const app = express();
const port = 4000;

app.use((req, res, next) => {
    console.log(`Request Method: ${req.method}, URL: ${req.url}`);
    next(); 
});

app.get('/home', (req, res) => {
  res.send('Hello from Home Page')
});

app.get('/about', (req, res) => {
  res.send('Hello from About Page')
});

app.get('/gallery', (req, res) => {
  res.send('Hello from Gallery Page')
});

app.get('/contact', (req, res) => {
  res.send('Hello from Contact Page')
});

app.listen(port, () => {
  console.log(`Server Starting at http://localhost:${port}`);
})