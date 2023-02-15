const mongoose  = require("mongoose")
const exempleSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    }
})
const Exemple = mongoose.model("Exemple",exempleSchema)
module.exports = {Exemple}