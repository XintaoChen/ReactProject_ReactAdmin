const User = require("../models/User");

const reqLogin = (req, res) => {
  // 未经过加密的版本
  const { username, password } = req.body;
  console.log(username, password);
  User.findOne({ username: username, password: password }, (err, user) => {
    if (user) {
      res.send({
        status: 0,
        data: user,
      });
    } else {
      res.send({
        status: 1,
        msg: "用户名或密码不正确!",
      });
    }
  });
};

module.exports = {
  reqLogin,
};
