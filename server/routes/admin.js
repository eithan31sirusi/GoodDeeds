const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");

// Middleware
const { authMiddleware, authorizeAdmin } = require("../middleware/auth");

// GET all users
router.get(
  "/users",
  authMiddleware,
  authorizeAdmin,
  adminController.getAllUsers
);

// GET a specific user by ID
router.get(
  "/users/:id",
  authMiddleware,
  adminController.getUserById
);

// CREATE a new user
router.post(
  "/users",
  authMiddleware,
  authorizeAdmin,
  adminController.createNewUser
);

// UPDATE a user by ID
router.put(
  "/users/:id",
  authMiddleware,
  authorizeAdmin,
  adminController.updateUserById
);

// DELETE a user by ID
router.delete(
  "/users/:id",
  authMiddleware,
  authorizeAdmin,
  adminController.deleteUserById
);

module.exports = router;
