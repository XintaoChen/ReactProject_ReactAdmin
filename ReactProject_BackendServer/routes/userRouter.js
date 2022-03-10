const express = require("express");

const userRouter = express.Router();
const userController = require("../controllers/userController");

// add login
userRouter.post("/add", (req, res) => {
  userController.reqAddUser(req, res);
});

//export the router
module.exports = userRouter;
