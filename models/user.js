var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
var userSchema = new mongoose.Schema({
    username:String,
    password:String,
    email:String,
    dateOfJoin:{type:Date , default:Date.now}
    // username:s,
    // email:string,

});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("user", userSchema);