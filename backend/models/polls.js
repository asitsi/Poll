const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const optionSchema = new mongoose.Schema({
  option: String,
  votes: [String],
});

const pollSchema = new mongoose.Schema(
  {
    question: String,
    options: [optionSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Poll", pollSchema);
