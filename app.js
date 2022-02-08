const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

dotenv.config({ path: "./config.env" });

require("./db/connection"); //connection file
const User = require("./model/userschema");

//  app.use(require('./router/auth'));  // router file

const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true })); //type of middlewere
app.use(bodyParser.json());

//middleware it will  check whether user is login or not / if !login it will not show about page

const middleware = (req, res, next) => {
  console.log("Hello Middle were");
  next();
};
app.get("/", (req, res) => {
  // res.send(`Hello world from server from app js`);
  res.sendFile(__dirname + "/index.html", (err) => {
    if (err) {
      console.log("Error occured while loading HTML file");
    }
  });
});

app.get("/about", middleware, (req, res) => {
  res.send(`Hello about world fromserver`);
});

app.get("/contact", (req, res) => {
  res.send(`Hello contact world from server`);
});

app.get("/signin", (req, res) => {
  res.send(`Hello sign world from server`);
});

app.post("/signup", (req, res) => {
  const details = req.body;
  const addUSer = User.create(details); // to connect to mongo
  return res.json({
    user: addUSer,
    message: "user added",
  });
});

app.listen(3000, () => {
  console.log(`server is running at port no ${PORT}`);
});
