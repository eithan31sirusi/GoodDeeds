const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const { hashPassword, comparePassword } = require("./utils/password");
const {
  generateToken,
  authenticateToken,
  authorizeAdmin,
} = require("./utils/jwt");
const connectDB = require("./utils/db");

dotenv.config();

connectDB();

// Import routes
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");
const goodDeedRoutes = require("./routes/gooddeed");

// Create Express app
const app = express();

// Middleware

app.use(cors());
app.use(express.json());

// Connect to MongoDB

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/admin", /* authenticateToken, authorizeAdmin ,*/ adminRoutes);
app.use("/api/gooddeeds", goodDeedRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Server error" });
});

// Start server
app.listen(process.env.PORT, () => {
  console.log("Server started on port" + process.env.PORT, process.env.JWT_SECRET);
});
