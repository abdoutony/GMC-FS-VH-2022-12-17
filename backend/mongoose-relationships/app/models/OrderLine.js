const mongoose = require("mongoose")
const orderLineSchema = new mongoose.Schema({
    quantity:{
        type:Number
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        default:new mongoose.Types.ObjectId 
    },
    price:{type:Number,default:null}
},{timestamps:true})

const OrderLine= mongoose.model("OrderLine",orderLineSchema)
module.exports=OrderLine