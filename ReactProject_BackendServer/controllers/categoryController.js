const mongoose = require("mongoose");
const Category = require("../models/Category");

const reqAddCategory = (req, res) => {
  try {
    const { parentId, name } = req.body;

    console.log(parentId, name);
    let newCategory = new Category({
      parentId: parentId,
      name: name,
    });

    newCategory.save((err) => {
      if (err) {
        res.json({
          status: 1,
          msg: err,
        });
      } else {
        res.json({
          status: 0,
          data: newCategory,
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.json({
      status: 1,
      msg: err,
    });
    next(err);
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
    res.json({
      status: 1,
      msg: err,
    });
  }
};

const reqUpdateCategory = (req, res) => {
  try {
    const { categoryId, categoryName } = req.body;

    Category.updateOne({ _id: categoryId }, { name: categoryName }).then(() => {
      res.json({
        status: 0,
      });
    });
  } catch (err) {
    res.json({
      status: 1,
      msg: err,
    });
  }
};

module.exports = {
  reqAddCategory,
  reqCategories,
  reqUpdateCategory,
};
