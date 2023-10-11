const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: String,
    email: {type: String,unique:true},
    password: String,
    gp_id: {type: mongoose.Schema.Types.ObjectId,default: ()=> new mongoose.Types.ObjectId()},
    dp : String
})


const UserModel = mongoose.model("user",userSchema);


module.exports = UserModel;