const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  create_time: Date,
  email: {
    type: String,
    default: "",
  },
  phone: {
    type: String,
    default: "",
  },
  roles: {
    _id: false,
    menus: [
      {
        type: String,
      },
    ],
  },
});

const User = mongoose.model("User", UserSchema, "Users");

module.exports = User;
