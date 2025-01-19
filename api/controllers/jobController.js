// handles job application logic
const Job = require("../models/Job.js");

exports.createJob = async (req, res) => {
  try {
    const job = await Job.create(req.body);
    return res.status(201).json(job);
  } catch (err) {
    res.status(400).json({ message: "Error occured" });
  }
};

exports.fetchJobsWithId = async (req, res) => {
  if (req.user.id === req.params.id) {
    try {
      const jobs = await Job.find({ userRef: req.params.id });
      res.status(200).json(jobs);
    } catch (err) {
      res.staus(401).json(err);
    }
  } else {
    res.status(401).json({ message: "You can Only view only yours jobs" });
  }
};

exports.deleteJobWithId = async (req, res) => {
  const job = await Job.findById(req.params.id);

  if (!job) {
    res.status(400).json("Job not found");
  } else if (!req.user._id.equals(job.userRef)) {
    res.status(400).json("You can only delete your own lisitngs!");
  } else {
    try {
      await Job.findByIdAndDelete(req.params.id);
      res.status(200).json("Job has been deleted!");
    } catch (error) {
      res.status(400).json("Server error");
    }
  }
};

exports.fetchSingleJob = async (req, res) => {
  // console.log(req.params.id);
  const job = await Job.findById(req.params.id);

  if (!job) {
    res.status(400).json("No Job found");
  }

  if (!req.user._id.equals(job.userRef)) {
    res.status(400).json("You can Only update your Jobs");
  }

  res.status(200).json(job);
};

exports.updateJob = async (req, res) => {
  const job = await Job.findById(req.params.id);

  if (!job) {
    res.status("Job not found");
  }

  if (!req.user._id.equals(job.userRef)) {
    res.status("You can only edit your own Jobs");
  }

  try {
    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(updatedJob);
  } catch (error) {
    res.status(400).json(error);
  }
};
// exports.getJobListings = async (req, res) => {};
