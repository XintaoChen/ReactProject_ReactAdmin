const express = require("express");

const categoryRouter = express.Router();
const categoryController = require("../controllers/categoryController");

// add new category
categoryRouter.post("/add", (req, res) => {
  categoryController.reqAddCategory(req, res);
});

// get a list of categories under a parent
categoryRouter.get("/list", (req, res) => {
  categoryController.reqCategories(req, res);
});

// update a category
categoryRouter.get("/update", (req, res) => {
  categoryController.reqUpdateCategory(req, res);
});

//export the router
module.exports = categoryRouter;
