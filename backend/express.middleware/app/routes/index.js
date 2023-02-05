const express =require("express")
const products = require("./products")
const router = express.Router()

module.exports =()=>{
    router.get("/",(req,res)=>{
        res.status(200).send("add either /product or /users")
    })
    router.use("/products",products())
    return router
}