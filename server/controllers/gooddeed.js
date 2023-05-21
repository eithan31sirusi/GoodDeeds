const GoodDeed = require("../models/Deed");
const User = require("../models/User");
const UsersDeedSchema = require("../models/UsersDeed");

// get all global good deeds
const getGlobalGoodDeeds = async (req, res) => {
  try {
    const goodDeeds = await GoodDeed.find();
    res.json(goodDeeds);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// create a new global good deed (only for admin)
const createGlobalGoodDeed = async (req, res) => {
  if (!req.user.isAdmin === "yes") {
    return res.status(401).json({ msg: "Unauthorized" });
  }
  const { title, description, difficulty } = req.body;
  try {
    const newGoodDeed = new GoodDeed({
      title,
      description,
      difficulty,
    });
    const goodDeed = await newGoodDeed.save();
    res.json(goodDeed);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// delete a global good deed by id (only for admin)
const deleteGlobalGoodDeed = async (req, res) => {
  if (!req.user.isAdmin === "yes") {
    return res.status(401).json({ msg: "Unauthorized" });
  }
  try {
    const goodDeed = await GoodDeed.findById(req.params.id);
    if (!goodDeed) {
      return res.status(404).json({ msg: "Good deed not found" });
    }
    await goodDeed.remove();
    res.json({ msg: "Good deed removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// update a global good deed by id (only for admin)

const updateGlobalGoodDeed = async (req, res) => {
  if (!req.user.isAdmin === "yes") {
    return res.status(401).json({ msg: "Unauthorized" });
  }
  const { title, description, difficulty } = req.body;
  try {
    const goodDeed = await GoodDeed.findById(req.params.id);
    if (!goodDeed) {
      return res.status(404).json({ msg: "Good deed not found" });
    }
    goodDeed.title = title;
    goodDeed.description = description;
    goodDeed.difficulty = difficulty;
    await goodDeed.save();
    res.json(goodDeed);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// get user's personal good deeds
const getPersonalGoodDeeds = async (req, res) => {
  const userId = req.params.id;
  try {
    const userGoodDeeds = await UsersDeedSchema.find({ userId: userId });
    res.json(userGoodDeeds);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// add a new personal good deed
const addPersonalGoodDeed = async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const userId = req.params.id;

  const { title, description, difficulty, status, creator } = req.body;

  try {
    const newPersonalGoodDeed = new UsersDeedSchema({
      title,
      description,
      difficulty,
      status: status,
      creator: creator,
      userId: userId,
    });

    await newPersonalGoodDeed.save();
    res
      .status(200)
      .json({ message: "Good deed added successfully", newPersonalGoodDeed });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// delete a personal good deed by id
const deletePersonalGoodDeed = async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const goodDeed = await UsersDeedSchema.findById(req.params.id);
    if (!goodDeed) {
      return res.status(404).json({ msg: "Good deed not found" });
    }
    await UsersDeedSchema.findByIdAndRemove(goodDeed);
    res.json({ msg: "Good deed removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

/* 
// get user's personal good deeds
const getPersonalGoodDeeds = async (req, res) => {
    const userId = req.user.id;
    try {
      const user = await User.findById(userId);
      // use the UsersDeedSchema to create a new personal gooddeed that will be save in to the  to the user's userGoodeeds array
      const newPersonalGoodDeed = new UsersDeedSchema({
        title,
        description,
        difficulty,
        status: "incomplete",
        creator: user.name,
        userId,
      });
      user.push(newPersonalGoodDeed);
      await user.save();
      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }; */

module.exports = {
  getGlobalGoodDeeds,
  createGlobalGoodDeed,
  deleteGlobalGoodDeed,
  updateGlobalGoodDeed,
  getPersonalGoodDeeds,
  addPersonalGoodDeed,
  deletePersonalGoodDeed,
};
