// Handles authentication logic
const User = require("../models/User");
const generateToken = require("../utils/generateToken");

// register user
exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // check if user already exists
    let user = await User.findOne({ email });

    if (user) return res.status(400).json({ message: "User already exists" });

    // create new user
    user = await User.create({ name, email, password });
    res.status(201).json("User created successfully");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// login user
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    // check password
    const isMatch = await user.matchPassword(password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const { password: pass, ...rest } = user._doc;

    res
      .cookie("access_token", generateToken(user._id), {
        httpOnly: true,
        maxAge: 1 * 24 * 60 * 60 * 1000,
        // set secure to false for local tetsing
        secure: true,
        // for fixing cookie error after deployment
        sameSite: "none",
      })
      .status(200)
      .json(rest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// logout user
// doubt
exports.logout = (req, res) => {
  try {
    res.clearCookie("access_token").status(200).json({ message: "Logged out" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
