const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  getResumeWithUserId,
  deleteResumeWithId,
} = require("../controllers/resumeController");

const router = express.Router();

router.get("/getResume/:id", protect, getResumeWithUserId);
router.delete("/deleteResume/:id", protect, deleteResumeWithId);

module.exports = router;
