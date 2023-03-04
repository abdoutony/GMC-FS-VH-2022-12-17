const mongoose=require("mongoose")

const orderSchema = new mongoose.Schema({
    date:{
        type:Date,
        default:Date.now
    },
    totalPrice:{
        type:Number
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        default:new mongoose.Types.ObjectId 
    },
    orderLines:[
       {type:mongoose.Schema.Types.ObjectId,ref:"OrderLine",default:[]}
    ]
},{timestamps:true})

const Order = mongoose.model("Order",orderSchema)
module.exports= Order