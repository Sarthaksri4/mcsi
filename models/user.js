const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
    },
    token: {
        type: String,
    },
    resetPasswordExpires: {
        type: Date,
    },

});

module.exports = mongoose.model("user",userSchema);