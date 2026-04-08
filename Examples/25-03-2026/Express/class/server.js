const express = require('express'); // import statement
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    const time = Date();
    res.send("welcome To home page")
})


app.get("/about",(req,res)=>{
  res.send("This is About page")
})

app.get("/contact",(req,res)=>{
  res.send("This is Contact page")
})

app.get("/info",(req,res)=>{
  res.send("This is information page")
})

//Query Parameter Examples

app.get("/user",(req,res)=>{
  const name = req.query.name;
  const age = req.query.age;

  res.send(`Name : ${name} Age : ${age}`);
})


app.get("/products", (req, res)=>{
  const category = req.query.categoty;
  const price = req.query.price;

  res.json({
    category: category,
    price: price
  });
})

app.get("/course",(req,res)=>{
  const cName = req.query.name;

  res.send(`You search for ${cName}`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)

})