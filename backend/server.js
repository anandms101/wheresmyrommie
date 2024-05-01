const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const User = require("./Models/user");

var app = express();
app.use(cors());
app.use(express.json());

const mongourl = process.env.MONGO_DB_URI;
const port = process.env.PORT || 5000;

mongoose
  .connect(mongourl)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.post("/users", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
});

app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id)
    .then(() => res.json({ message: "User deleted successfully" }))
    .catch(err => res.status(500).json({ error: err.message }));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
