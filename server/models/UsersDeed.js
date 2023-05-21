const mongoose = require("mongoose");

const UsersDeedSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  creator: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const UsersDeedModel = mongoose.model("UsersDeed", UsersDeedSchema);

module.exports = UsersDeedModel;
