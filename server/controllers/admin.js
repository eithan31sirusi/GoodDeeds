// routes/adminRoutes.js

const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const UserModel = require("../models/User");

const { generateToken, verifyToken } = require("../utils/jwt");

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error rrrr" });
  }
};

// Get a specific user by ID
const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
// Create a new user
const createNewUser = async (req, res) => {
  const { name, email, password, isAdmin } = req.body;

  try {
    let user = await UserModel.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user = new UserModel({
      name,
      email,
      password: hashedPassword,
      isAdmin: isAdmin,
    });

    await user.save();

    const token = generateToken(user.id);

    res.status(200).json({ token, user, message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update a user by ID
const updateUserById = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  try {
    const user = await UserModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.name = name || user.name;
    user.email = email || user.email;
    user.password = password || user.password;

    await user.save();

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a user by ID
const deleteUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await UserModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await UserModel.findByIdAndRemove(id);

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createNewUser,
  updateUserById,
  deleteUserById,
};
