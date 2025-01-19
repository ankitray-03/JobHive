// routes for job application
const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  createJob,
  fetchJobsWithId,
  deleteJobWithId,
  fetchSingleJob,
  updateJob,
} = require("../controllers/jobController");

const router = express.Router();

router.post("/create", protect, createJob);
router.get("/getMyJobs/:id", protect, fetchJobsWithId);
router.get("/singleJob/:id", protect, fetchSingleJob);
router.delete("/deleteJob/:id", protect, deleteJobWithId);
router.post("/updateJob/:id", protect, updateJob);

module.exports = router;
