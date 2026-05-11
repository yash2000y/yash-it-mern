const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema({

name:String,
email:String,
mobile:String,
address:String,
password:String,
message:String

});

module.exports = mongoose.model("Enquiry", enquirySchema);