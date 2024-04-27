const mongoose = require("mongoose");
const bcrypt = require("bcrypt"); // For password hashing

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    age: {
      type: Number,
    },
    bio: {
      type: String,
    },
    profilePicture: {
      type: String,
    },
    occupation: {
      type: String,
    },
    smokingHabits: {
      type: String,
      enum: ["Non-smoker", "Occasional", "Smoker"],
    },
    petOwnership: {
      type: String,
      enum: ["Pet Owner", "Not a Pet Owner"],
    },
    cleanliness: {
      type: String,
      enum: ["Very Clean", "Somewhat Clean", "Not Very Clean"],
    },
    sleepSchedule: {
      type: String,
      enum: ["Early Bird", "Night Owl", "Flexible"],
    },
    desiredMoveInDate: {
      type: Date,
    },
    budget: {
      type: Number,
    },
    location: {
      type: String,
    },
    interests: {
      type: [String],
    },
  },
  { timestamps: true }
);

// Hash password before saving user
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  const saltRounds = 10;
  const hash = await bcrypt.hash(this.password, saltRounds);
  this.password = hash;
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
