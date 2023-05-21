// server/utils/jwt.js

const jwt = require("jsonwebtoken");

// Generate JWT token for user
const generateToken = (user) => {
  const payload = {
    user: {
      id: user.id,
      isAdmin: user.isAdmin,
      name: user.name,
    },
  };
  console.log(payload);
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

// Verify JWT token
const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded.user;
  } catch (error) {
    console.error(error.message); // log the error message
    return null;
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
