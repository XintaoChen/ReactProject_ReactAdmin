const Product = require("../models/Product");

const reqAddProduct = async (req, res) => {
  try {
    const { productName, categoryId, price, desc } = req.body;
    const product = await Product.findOne({ productName: productName });
    if (product && product.length != 0) {
      res.json({
        status: 1,
        msg: "this product already exist",
      });
    } else {
      // 加密（暂时缺少）

      // create new User
      let newProduct = new Product({
        productName: productName,
        categoryId: categoryId,
        price: price,
        desc: desc,
      });
      newProduct.save((err) => {
        if (err) {
          console.log(err);
        } else {
          res.json({
            status: 0,
            data: newProduct,
          });
        }
      });
    }
  } catch (err) {
    console.log(err);
    res.json({
      status: 1,
      msg: err,
    });
  }
};

const reqProducts = async (req, res) => {
  try {
    const pageNum = Number(req.query.pageNum);
    const pageSize = Number(req.query.pageSize);

    const total = await Product.find({}).countDocuments();
    const list = await Product.find({})
      .skip((pageNum - 1) * pageSize)
      .limit(pageSize);
    if (list) {
      res.json({
        status: 0,
        total: total,
        list: list,
      });
    } else {
      res.json({
        status: 1,
        msg: "no data",
      });
    }
  } catch (err) {
    console.log(err);
  }
};

const reqSearchProducts = async (req, res) => {
  try {
    const productName = new RegExp(req.query.productName, "i");
    const productDesc = new RegExp(req.query.productDesc, "i");

    const pageNum = Number(req.query.pageNum);
    const pageSize = Number(req.query.pageSize);

    const total = await Product.find({
      $and: [{ productName: productName }, { desc: productDesc }],
    }).countDocuments();
    const list = await Product.find({
      $and: [{ productName: productName }, { desc: productDesc }],
    })
      .skip((pageNum - 1) * pageSize)
      .limit(pageSize);

    res.json({
      status: 0,
      total: total,
      list: list,
    });
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  reqAddProduct,
  reqProducts,
  reqSearchProducts,
};
