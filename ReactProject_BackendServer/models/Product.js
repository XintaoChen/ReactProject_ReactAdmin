const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  productName: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    default: "Please add any description...",
  },
  price: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model("Product", ProductSchema, "Products");

module.exports = Product;
