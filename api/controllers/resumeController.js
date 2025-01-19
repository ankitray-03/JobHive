const Resume = require("../models/Resume");

exports.getResumeWithUserId = async (req, res) => {
  if (req.user.id === req.params.id) {
    try {
      const resumes = await Resume.find({ userRef: req.params.id });

      let ResumeData = [];
      resumes.forEach((resume) => {
        ResumeData.push(resume);
      });
      res.status(200).json(ResumeData);
    } catch (err) {
      res.staus(401).json(err);
    }
  } else {
    res.status(401).json({ message: "You can Only view only yours resumes" });
  }
};

exports.deleteResumeWithId = async (req, res) => {
  const resume = await Resume.findById(req.params.id);

  if (!resume) {
    res.status(400).json("Listing not found");
  }

  if (!req.user._id.equals(resume.userRef)) {
    res.status(400).json("You can only delte your resumes");
  }

  try {
    await Resume.findByIdAndDelete(req.params.id);
    res.status(200).json("Resume deleted Successfully");
  } catch (error) {
    res.status(400).json(error);
  }
};
