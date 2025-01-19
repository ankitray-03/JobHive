const express = require("express");
const router = express.Router();
const uplaod = require("../middleware/multerSetup");
const uploadFile = require("../controllers/fileUploadController");
const { protect } = require("../middleware/authMiddleware");

router.post("/upload", protect, uplaod.single("file"), uploadFile);

module.exports = router;
