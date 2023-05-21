const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const { hashPassword, comparePassword } = require("../utils/password");

const { generateToken } = require("../utils/jwt");

// @desc      User login
// @route     POST /api/auth/login
// @access    Public
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user);
    console.log(token);
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc      User registration
// @route     POST /api/auth/register
// @access    Public
exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    const token = generateToken(user.id);

    res.status(200).json({ token }, "User created successfully", user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
