const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Image upload,  Videos, PDF files ke liye multer package use karte hain

const multer = require("multer");
const path = require("path");

// login logout ke liye

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const app = express();

app.use(express.json());
// app.use(cors());
app.use(cors({
  origin: "https://your-frontend.vercel.app"
}));

// ---------------- IMAGE UPLOAD CONFIG ----------------

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// static folder for images
app.use("/uploads", express.static("uploads"));


// ---------------- MongoDB Connection ----------------

// mongoose.connect("mongodb://127.0.0.1:27017/yashit")
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


// ---------------- MODELS ----------------

const User = require("./models/User");
const Enquiry = require("./models/Enquiry");
const Setting = require("./models/HomeSetting");
const Admin = require("./models/Admin");
const AboutSetting = require("./models/AboutSetting");

//-------------- INSERT USER API (WITH IMAGE)---------------

app.post("/adduser", upload.single("image"), async (req, res) => {

  try {

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      mobile: req.body.mobile,
      address: req.body.address,
      image: req.file ? req.file.filename : ""
    });

    const result = await user.save();

    res.json({
      status: true,
      message: "User Added Successfully",
      data: result
    });

  } catch (error) {

    res.json({
      status: false,
      message: error.message
    });

  }

});


//------ SELECT USER API ---------

app.get("/showuser", async (req, res) => {

  try {

    const users = await User.find();

    res.json({
      status: true,
      data: users
    });

  } catch (error) {

    res.json({
      status: false,
      message: error.message
    });

  }

});


// ------ UPDATE USER API ---------

app.put("/updateuser/:id", upload.single("image"), async (req, res) => {

  try {

    const updateData = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      mobile: req.body.mobile,
      address: req.body.address
    };

    // agar new image upload hui ho
    if (req.file) {
      updateData.image = req.file.filename;
    }

    const user = await User.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    res.json({
      status: true,
      message: "User Updated Successfully",
      data: user
    });

  } catch (error) {

    res.json({
      status: false,
      message: error.message
    });

  }

});

// -------- DELETE USER API ---------

app.delete("/deleteuser/:id", async (req, res) => {

  try {

    const user = await User.findByIdAndDelete(req.params.id);

    res.json({
      status: true,
      message: "User Deleted Successfully",
      data: user
    });

  } catch (error) {

    res.json({
      status: false,
      message: error.message
    });

  }

});


// ------ ADD ENQUIRY API ---------

app.post("/addenquery", async (req, res) => {

  try {

    const enquiry = new Enquiry({

      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,
      address: req.body.address,
      password: req.body.password,
      message: req.body.message

    });

    const result = await enquiry.save();

    res.json({
      status: true,
      message: "Enquiry Added",
      data: result
    });

  } catch (error) {

    res.json({
      status: false,
      message: error
    });

  }

});


// ------ SHOW ENQUIRY API ---------

app.get("/showenquiry", async (req, res) => {

  try {

    const data = await Enquiry.find();

    res.json({
      status: true,
      data: data
    });

  } catch (error) {

    res.json({
      status: false,
      message: error.message
    });

  }

});


// -------- DELETE ENQUIRY API ---------

app.delete("/deleteenquiry/:id", async (req, res) => {

  try {

    const enquiry = await Enquiry.findByIdAndDelete(req.params.id);

    res.json({
      status: true,
      message: "Enquiry Deleted Successfully",
      data: enquiry
    });

  } catch (error) {

    res.json({
      status: false,
      message: error.message
    });

  }

});

// -------- Add HomeSetting API ---------


app.post("/addhomesetting",
  upload.fields([
    { name: "websiteLogo", maxCount: 1 },
    { name: "homeBarImage", maxCount: 1 }
  ]),
  async (req, res) => {

    try {

      const websiteLogo = req.files["websiteLogo"]
        ? req.files["websiteLogo"][0].filename : "";

      const homeBarImage = req.files["homeBarImage"]
        ? req.files["homeBarImage"][0].filename : "";

      const setting = new Setting({

        websiteName: req.body.websiteName,
        email: req.body.email,
        address: req.body.address,
        websiteLogo: websiteLogo,
        homeBarImage: homeBarImage

      });

      const result = await setting.save();

      res.json({
        status: true,
        message: "Setting Added Successfully",
        data: result
      });

    } catch (error) {

      res.json({
        status: false,
        message: error.message
      });

    }

  });

// -------- Show HomeSetting API ---------

app.get("/showhomesetting", async (req, res) => {

    const data = await Setting.find().sort({ _id: -1 }).limit(1);
  //  const data = await Setting.find();

  res.json({
    status: true,
    data: data
  });

});

// -------- DELETE HOME SETTING ---------

app.delete("/deletehomesetting/:id", async (req, res) => {

  try {

    const data = await Setting.findByIdAndDelete(req.params.id);

    res.json({
      status: true,
      message: "Home Setting Deleted Successfully",
      data: data
    });

  } catch (error) {

    res.json({
      status: false,
      message: error.message
    });

  }

});

// -------- UPDATE HOME SETTING API ---------

app.put("/updatehomesettings/:id",
  upload.fields([
    { name: "websiteLogo", maxCount: 1 },
    { name: "homeBarImage", maxCount: 1 }
  ]),
  async (req, res) => {

    try {

      const updateData = {
        websiteName: req.body.websiteName,
        email: req.body.email,
        address: req.body.address
      };

      // ✅ logo update
      if (req.files["websiteLogo"]) {
        updateData.websiteLogo = req.files["websiteLogo"][0].filename;
      }

      // ✅ banner update
      if (req.files["homeBarImage"]) {
        updateData.homeBarImage = req.files["homeBarImage"][0].filename;
      }

      const result = await Setting.findByIdAndUpdate(
        req.params.id,
        updateData,
        { new: true }
      );

      res.json({
        status: true,
        message: "Home Setting Updated Successfully",
        data: result
      });

    } catch (error) {

      res.json({
        status: false,
        message: error.message
      });

    }

  });

// -------- EDIT HOME SETTING API ---------

app.get("/edithomesettings/:id", async (req, res) => {

  try {

    const data = await Setting.findById(req.params.id);

    res.json({
      status: true,
      data: data
    });

  } catch (error) {

    res.json({
      status: false,
      message: error.message
    });

  }

});


// -------- ADMIN LOGIN API ---------

app.post("/adminlogin", async (req, res) => {

  const { username, password } = req.body;

  try {

    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res.status(400).json({
        status: false,
        message: "Invalid username or password"
      });
    }

    if (admin.password !== password) {
      return res.status(400).json({
        status: false,
        message: "Invalid password"
      });
    }

    const token = jwt.sign(
      { id: admin._id },
      "secretkey",
      { expiresIn: "1d" }
    );

    res.json({
      message: "Login successful",
      token
    });

  } catch (error) {
    res.status(500).json(error);
  }

});


// -------- ADMIN LOGOUT API ---------

app.post("/logout", (req, res) => {

  res.json({
    status: true,
    message: "Logout successful"
  });

});

// -------- Add About Setting ---------

app.post("/addaboutsetting", upload.single("image"), async (req, res) => {

  try {

    const about = new AboutSetting({

      birthday: req.body.birthday,
      age: req.body.age,
      degree: req.body.degree,
      phone: req.body.phone,
      email: req.body.email,
      website: req.body.website,
      city: req.body.city,
      freelance: req.body.freelance,
      image: req.file ? req.file.filename : ""

    });

    const result = await about.save();

    res.json({
      status: true,
      message: "About Added Successfully",
      data: result
    });

  } catch (error) {

    res.json({
      status: false,
      message: error.message
    });

  }

});

// -------- SHOW ABOUT SETTINGS ---------

app.get("/showaboutsettings", async (req, res) => {

  try {

    const data = await AboutSetting.find().sort({ _id: -1 });

    res.json({
      status: true,
      data: data
    });

  } catch (error) {

    res.json({
      status: false,
      message: error.message
    });

  }

});

// -------- DELETE ABOUT SETTINGS ---------

app.delete("/deleteaboutsetting/:id", async (req, res) => {

  try {

    const data = await AboutSetting.findByIdAndDelete(req.params.id);

    res.json({
      status: true,
      message: "About Setting Deleted Successfully",
      data: data
    });

  } catch (error) {

    res.json({
      status: false,
      message: error.message
    });

  }

});

// -------- EDIT ABOUT SETTINGS ---------

app.get("/editaboutsetting/:id", async (req, res) => {

  try {

    const data = await AboutSetting.findById(req.params.id);

    res.json({
      status: true,
      data: data
    });

  } catch (error) {

    res.json({
      status: false,
      message: error.message
    });

  }

});

// -------- UPDATE ABOUT SETTINGS ---------

app.put("/updateaboutsetting/:id", upload.single("image"), async (req, res) => {

  try {

    const updateData = {

      birthday: req.body.birthday,
      age: req.body.age,
      degree: req.body.degree,
      phone: req.body.phone,
      email: req.body.email,
      website: req.body.website,
      city: req.body.city,
      freelance: req.body.freelance

    };

    // ✅ image update
    if (req.file) {
      updateData.image = req.file.filename;
    }

    const result = await AboutSetting.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    res.json({
      status: true,
      message: "About Updated Successfully",
      data: result
    });

  } catch (error) {

    res.json({
      status: false,
      message: error.message
    });

  }

});
// ---------------- SERVER ----------------

app.listen(5000, () => {
  console.log("Server running on port 5000");
});