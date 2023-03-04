const Product = require("../models/product")
const User = require("../models/user")
const Order= require("../models/order")
const OrderLine= require("../models/OrderLine")
const order = require("../routes/order")
exports.addNewOrder = async (req,res)=>{
    try{
       const orderLines =req.body.orderLines
        var totalPrice= 0
        const orderLineIds = [];
    for (let i = 0; i < orderLines.length; i++) {
    const orderLine = new OrderLine({
        product: orderLines[i].product,
        quantity: orderLines[i].quantity,
        price: orderLines[i].price
    });
    totalPrice = totalPrice + orderLines[i].quantity *orderLines[i].price
    
    await orderLine.save();
    
    orderLineIds.push(orderLine._id);
    }

    const order = new Order({
        owner:req.body.owner,
        totalPrice,
        orderLines: orderLineIds,
      });
      
      const saved_order= await order.save();
  
     res.status(200).send(saved_order)
 

//        // const arr=[ 1,2,3]
//        // var sum=0
//        // arr.forEach(elm=>{
//        //     sum=sum+elm
//        // })
//        // const rs= arr.reduce((acc,curr)=>{
//        //     return acc+curr
//        // })
//        /**
//         * acc:0 , curr:1
//         * acc:1,curr:2
//         * acc:3,curr:3
//         * rs = 6
//         */

    }catch(err){
       res.send("errr")
    }
 }

 exports.getOrders =async(req,res)=>{
    try{
     const orders= await Order.find().populate("orderLines owner")
    
     res.status(200).send(orders)
    }catch(err){
        res.status(500).send(err.message)
    }
 }