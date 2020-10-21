const mongoose = require("mongoose");

const NewTransactionSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please fill name field!"],
  },
  amount: {
    type: Number,
    required: [true, "Please fill amount field!"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("NewTransaction", NewTransactionSchema);
