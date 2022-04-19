const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const db = require("./models/db");

// link to routes
const userRouter = require("./routes/userRouter");
const categoryRouter = require("./routes/categoryRouter");
const productRouter = require("./routes/productRouter");

app.use("/manage/user", userRouter);
app.use("/manage/category", categoryRouter);
app.use("/manage/product", productRouter);
// login
const loginController = require("./controllers/loginController");
app.post("/login", (req, res) => {
  loginController.reqLogin(req, res);
});

// set up server
app.listen(5000, (err) => {
  if (!err)
    console.log(
      "server 1 set up. send request to http://localhost:5000/students"
    );
});
