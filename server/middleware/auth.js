const jwt = require("jsonwebtoken");

const { verifyToken } = require("../utils/jwt");

const authMiddleware = (req, res, next) => {
  // Get the token from the authorization header
  const authHeader = req.headers.authorization;
  const token =
    authHeader && authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    // Verify the token
    const user = verifyToken(token);
    console.log(user); // log the decoded user object

    // Attach the user to the request object
    req.user = user;

    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: "Unauthorized" });
  }
};

const authorizeAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin === "yes") {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized as admin" });
  }
};

module.exports = { authMiddleware, authorizeAdmin };
