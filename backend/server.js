const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const { Webhook } = require("svix");
const bodyParser = require("body-parser");
var morgan = require("morgan");

const User = require("./Models/user");

var app = express();
app.use(cors());
app.use(express.json());

app.use(morgan("dev"));

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

// get users except the one with the email, or get all
app.get("/users", async (req, res) => {
  try {
    const { email } = req.query;
    if (email) {
      const user = await User.find({ email: { $ne: email } });
      res.json(user);
    } else {
      const users = await User.find();
      res.json(users);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get user by email
app.get("/user", async (req, res) => {
  try {
    const { email } = req.query;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
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
    .catch((err) => res.status(500).json({ error: err.message }));
});

app.post(
  "/api/webhooks",
  bodyParser.raw({ type: "application/json" }),
  async function (req, res) {
    const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;
    if (!WEBHOOK_SECRET) {
      throw new Error("You need a WEBHOOK_SECRET in your .env");
    }

    const headers = req.headers;
    const payload = JSON.stringify(req.body);

    const svix_id = headers["svix-id"];
    const svix_timestamp = headers["svix-timestamp"];
    const svix_signature = headers["svix-signature"];

    if (!svix_id || !svix_timestamp || !svix_signature) {
      return new Response("Error occured -- no svix headers", {
        status: 400,
      });
    }

    const wh = new Webhook(WEBHOOK_SECRET);

    let evt;

    try {
      evt = wh.verify(payload, {
        "svix-id": svix_id,
        "svix-timestamp": svix_timestamp,
        "svix-signature": svix_signature,
      });
      console.log("EVT DATA: ", evt.data);
    } catch (err) {
      console.log("Error verifying webhook:", err.message);
      return res.status(400).json({
        success: false,
        message: err.message,
      });
    }

    const { id } = evt.data;
    const eventType = evt.type;
    console.log(`Webhook with an ID of ${id} and type of ${eventType}`);
    console.log("Webhook body:", evt.data);

    //post the data to mongodb
    if (eventType === "user.created") {
      const userBody = {
        email: evt.data.email_addresses[0].email_address,
        firstName: evt.data.first_name,
        lastName: evt.data.last_name,
      };
      console.log("User Body: ", userBody);
      const user = new User(userBody);
      await user.save().then(() => console.log("User saved to MongoDB"));
    }

    return res.status(200).json({
      success: true,
      message: "Webhook received",
    });
  }
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
