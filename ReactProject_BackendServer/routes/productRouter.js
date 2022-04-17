const express = require("express");

const productRouter = express.Router();
const productController = require("../controllers/productController");

// add new product
productRouter.post("/add", (req, res) => {
  productController.reqAddProduct(req, res);
});

// get a list of products
productRouter.get("/list", (req, res) => {
  productController.reqProducts(req, res);
});

// search products
productRouter.get("/search", (req, res) => {
  productController.reqSearchProducts(req, res);
});

//export the router
module.exports = productRouter;
