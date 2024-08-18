const mongoose = require("mongoose");
const productModel = require("./productModel")
const userSchemea = mongoose.Schema({
    fullname:String,
    email:String,
    password:String,
    cart: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "productModel" // Ensure this matches the exported model name
        }
    ], 
    orders:{
        type:Array,
        default:[]
    },
    contact:Number,
    picture:String
});

module.exports = mongoose.model("userModel",userSchemea);