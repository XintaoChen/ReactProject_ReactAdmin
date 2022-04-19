const mongoose = require("mongoose");
const Category = require("../models/Category");

const reqAddCategory = async (req, res) => {
  try {
    const { parentId, name } = req.body;

    let category = await Category.findOne({ name: name });
    if (category) {
      res.json({
        status: 1,
        msg: "already exist",
      });
    } else {
      let newCategory = new Category({
        parentId: parentId,
        name: name,
      });

      newCategory.save((err) => {
        if (err) {
          console.log(err);
        } else {
          res.json({
            status: 0,
            data: newCategory,
          });
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
};

const reqCategories = async (req, res) => {
  try {
    const parentId = req.query.parentId;
    Category.find({ parentId: parentId }, (err, data) => {
      if (err) {
        res.json({
          status: 1,
          msg: err,
        });
      } else {
        res.json({
          status: 0,
          list: data,
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
};

const reqUpdateCategory = (req, res) => {
  try {
    const { categoryId, categoryName } = req.body;
    Category.findByIdAndUpdate(categoryId, { name: categoryName }, (err) => {
      if (err) {
        console.log(err);
      } else {
        res.json({
          status: 0,
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
};

const reqDeleteCategory = async (req, res) => {
  try {
    const { categoryId } = req.body;

    Category.findByIdAndDelete(categoryId, (err, data) => {
      res.json({
        status: 0,
      });
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  reqAddCategory,
  reqCategories,
  reqUpdateCategory,
  reqDeleteCategory,
};
