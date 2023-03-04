const express= require("express")
const router = express.Router()
const OrderController = require("../controllers/OrderController")
module.exports=()=>{

    router.post("/",OrderController.addNewOrder)
    router.get("/",OrderController.getOrders)
    return router
}