// routes for authentication
const express = require("express");
const { signup, login, logout } = require("../controllers/authController");
const passport = require("passport");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

// google OAuth routes
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    if (!req.user) {
      res.status(401).json({ message: "Authentication failed" });
    }

    // respond with the token and user information
    const { token, user } = req.user;

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ message: "google authentication successful" });
  }
);

module.exports = router;
