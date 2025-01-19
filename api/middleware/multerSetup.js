const multer = require("multer");

// multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    const date = new Date().getTime();
    cb(null, date + file.originalname);
  },
});

const uplaod = multer({ storage: storage });

module.exports = uplaod;
