const mongoose = require("mongoose");

const allPlayedSimsSchema = mongoose.Schema({
    name: String,
    userId: {type: mongoose.Schema.Types.ObjectId,ref: "user"},
    gp_id: {type: mongoose.Schema.Types.ObjectId,ref: "user"},
    status: String,
    jfile : String,
    route: String,
    crTime: String
})


const AllPlayedSimsModel = mongoose.model("user",allPlayedSimsSchema);


module.exports = AllPlayedSimsModel;