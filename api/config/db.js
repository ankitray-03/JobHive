// Database connection

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
  } catch (err) {
    console.log(`Error : ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
