var mongoose = require("mongoose");
require("./Institute");
require("./Department");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["Student", "FacilityHead", "CollegeHead", "Admin"],
    default: "Student",
  },
  institute: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Institute",
    default: null,
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
    default: null,
  },
  requests: {
    type: ["Request"],
  },
  isValid: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
