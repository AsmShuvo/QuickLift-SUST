const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  googleId: { type: String, required: true, unique: true },
  displayName: String,
  email: String,
  photo: String,
  role: { type: String, enum: ["biker", "passenger", null], default: null }
});

module.exports = mongoose.model("User", userSchema);