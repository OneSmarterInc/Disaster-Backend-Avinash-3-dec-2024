const mongoose = require("mongoose");

const allGpTable = mongoose.Schema({
    name: String,
    pgId: {type: mongoose.Schema.Types.ObjectId,ref: "user"},
    dp: String
})


const AllDpTableModel = mongoose.model("user",allGpTable);


module.exports = AllDpTableModel;