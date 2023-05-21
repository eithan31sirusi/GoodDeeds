// server/models/Deed.js

const mongoose = require("mongoose");

const DeedSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  difficulty: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: "incomplete",
  },
});

const DeedModel = mongoose.model("Deed", DeedSchema);

module.exports = DeedModel;
