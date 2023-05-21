const express = require("express");
const router = express.Router();

const {
  getGlobalGoodDeeds,
  createGlobalGoodDeed,
  deleteGlobalGoodDeed,
  updateGlobalGoodDeed,
  getPersonalGoodDeeds,
  addPersonalGoodDeed,
  deletePersonalGoodDeed,
} = require("../controllers/gooddeed");

// Middleware
const { authMiddleware, authorizeAdmin } = require("../middleware/auth");

// GET all global good deeds
router.get("/", getGlobalGoodDeeds);

// CREATE a new global good deed

router.post("/", authMiddleware, authorizeAdmin, createGlobalGoodDeed);

// DELETE a global good deed by ID

router.delete("/:id", authMiddleware, authorizeAdmin, deleteGlobalGoodDeed);

// UPDATE a global good deed by ID

router.put("/:id", authMiddleware, authorizeAdmin, updateGlobalGoodDeed);

// GET all personal good deeds
router.get("/personal/:id", authMiddleware, getPersonalGoodDeeds);

// CREATE a new personal good deed

router.post("/personal/:id", authMiddleware, addPersonalGoodDeed);

// DELETE a personal good deed by ID

router.delete("/personal/:id", authMiddleware, deletePersonalGoodDeed);

module.exports = router;
