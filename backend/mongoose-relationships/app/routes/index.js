const express= require("express")
const router = express.Router()
const orderRoutes =require('./order')
module.exports=()=>{
    router.get("/",(req,res)=>{
        res.send("Hello from api routes")
    })

    router.use("/orders",orderRoutes())

    return router
}