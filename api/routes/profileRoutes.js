const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

// Profile route
router.get("/profile", protect, (req, res) => {
  console.log(req.user);
  res.status(200).json({ user: req.user });
});

module.exports = router;
