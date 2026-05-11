const mongoose = require("mongoose");

const HomeSettingSchema = new mongoose.Schema({

    websiteName:{
        type:String
    },

    email:{
        type:String
    },

    address:{
        type:String
    },

    websiteLogo:{
        type:String
    },

    homeBarImage:{
        type:String
    }

},{timestamps:true});

module.exports = mongoose.model("Setting", HomeSettingSchema);