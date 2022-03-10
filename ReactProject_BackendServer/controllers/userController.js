const User = require("../models/User");

const reqAddUser = async (req, res) => {
  try {
    const { username, password, phone, email } = req.body;
    const user = await User.findOne({ username: username });
    if (user && user.length != 0) {
      res.status(404).json({
        status: 1,
        msg: "this username already exist",
      });
    } else {
      // 加密（暂时缺少）

      // create new User
      let newUser = new User({
        username: username,
        password: password,
        phone: phone,
        email: email,
        create_time: new Date().getDate(),
      });

      newUser.save((err) => {
        if (err) {
          res.status(400).json({
            status: 1,
            msg: err,
          });
        } else {
          res.status(200).json({
            status: 0,
            data: newUser,
          });
        }
      });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 1,
      msg: err,
    });
    next(err);
  }
};

module.exports = {
  reqAddUser,
};
