const express = require("express");
const router = express.Router();
const User = require("../models/User");


// CREATE USER
router.post("/users", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send(user);
});


// GET ALL USERS
router.get("/users", async (req, res) => {
  const users = await User.find();
  res.send(users);
});


// GET SINGLE USER
router.get("/users/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.send(user);
});


// UPDATE USER
router.put("/users/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.send(user);
});


// DELETE USER
router.delete("/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send({ message: "User Deleted" });
});

module.exports = router;