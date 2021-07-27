const mongoose = require("mongoose");

const NewUserSchema = new mongoose.Schema({
  email: {
    desc: "user email address",
    type: String,
    trim: true,
    index: true,
    unique: true,
    required: [true, "Please fill email field!"],
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },
  password: {
    desc: "user password",
    type: String,
    trim: true,
    required: [true, "Please fill password field!"],
    select: false,
  },
  name: {
    desc: "user name",
    type: String,
    trim: true,
    required: [true, "Please fill name field!"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("NewUser", NewUserSchema);
