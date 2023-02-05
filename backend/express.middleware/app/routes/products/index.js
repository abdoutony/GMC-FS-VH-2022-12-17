const express = require("express")
const {products} =require("../../data")
const router =express.Router()

module.exports = ()=>{

   router.get("/",(req,res)=>{
       res.status(200).json(products)
   })
   router.get("/:id",(req,res)=>{
      const product = products.find((el)=>el.id === parseInt(req.params.id))
      if(!product){
        res.status(404).send("product not found")
      }else{
        res.status(200).json(product)
      }
    })

    return router
}