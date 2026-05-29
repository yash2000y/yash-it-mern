const multer = require("multer");

const cloudinary = require("../config/cloudinary");

const { CloudinaryStorage } = require("multer-storage-cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "portfolio",
    allowed_formats: ["jpg", "png", "jpeg", "webp"],
  },
});

const upload = multer({
  storage: storage,
});

module.exports = upload;