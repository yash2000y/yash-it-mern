const express = require("express");
const router = express.Router();
const User = require("../models/User");

const upload = require("../uploads/upload");


// CREATE USER WITH IMAGE
router.post(
  "/users",
  upload.single("image"),
  async (req, res) => {
    try {

      const user = new User({
        ...req.body,
        image: req.file ? req.file.path : "",
      });

      await user.save();

      res.send(user);

    } catch (error) {
      res.status(500).send(error);
    }
  }
);


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


// UPDATE USER WITH IMAGE
router.put(
  "/users/:id",
  upload.single("image"),
  async (req, res) => {
    try {

      const updateData = {
        ...req.body,
      };

      if (req.file) {
        updateData.image = req.file.path;
      }

      const user = await User.findByIdAndUpdate(
        req.params.id,
        updateData,
        { new: true }
      );

      res.send(user);

    } catch (error) {
      res.status(500).send(error);
    }
  }
);


// DELETE USER
router.delete("/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send({ message: "User Deleted" });
});

module.exports = router;