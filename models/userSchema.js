const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    activity:{
        type:String,
        required:true,
    },
    hour:{
        type:Number,
        required:true
    } 
},
{
    timestamps:true
});

const users = new mongoose.model("users" , userSchema);

module.exports = users;