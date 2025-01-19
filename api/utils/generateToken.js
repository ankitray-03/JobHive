const jwt = require("jsonwebtoken");

// genrate JWT token
function generateToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
}

module.exports = generateToken;
