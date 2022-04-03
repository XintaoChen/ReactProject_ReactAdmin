const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  parentId: {
    type: mongoose.Schema.Types.ObjectId,
    default: new mongoose.Types.ObjectId("000000000000000000000000"),
  },
  name: {
    type: String,
    required: true,
  },
});

const Category = mongoose.model("Category", CategorySchema, "Categories");

module.exports = Category;
