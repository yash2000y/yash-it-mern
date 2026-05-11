const mongoose = require("mongoose");

const AboutSettingSchema = new mongoose.Schema(
  {
    birthday: {
      type: String
    },

    age: {
      type: Number
    },

    degree: {
      type: String
    },

    phone: {
      type: String
    },

    email: {
      type: String
    },

    website: {
      type: String
    },

    city: {
      type: String
    },

    freelance: {
      type: String
    },

    image: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("AboutSetting", AboutSettingSchema);
