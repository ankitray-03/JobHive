const cloudinary = require("../config/cloudinaryConfig");
const fs = require("fs");
const Resume = require("../models/Resume");

const uplaodFile = async (req, res, err) => {
  try {
    // check if file was provided
    if (!req.file) {
      res.status(400).json({ message: "No file Uploaded" });
    }

    console.log("Uploading to CLoudinary...");
    // uplaod file to cloudinary
    const cloudinaryUplaodResponse = await cloudinary.uploader.upload(
      req.file.path,
      {
        resource_type: "raw",
      }
    );

    // make a public signed url
    const fileUrl = cloudinary.url(cloudinaryUplaodResponse.public_id, {
      secure: true,
      resource_type: "raw",
    });

    await Resume.create({
      userRef: req.user._id,
      resumeUrl: fileUrl,
    })
      .then(() => {
        fs.unlinkSync(req.file.path);
        res.status(200).json({
          message: "Uploaded Successfully",
        });
      })
      .catch((err) => {
        fs.unlinkSync(req.file.path);
        res.status(400).json(err);
      });
  } catch (error) {
    console.log(error);
    fs.unlinkSync(req.file.path);
    res.status(400).json(error);
  }
};

module.exports = uplaodFile;
