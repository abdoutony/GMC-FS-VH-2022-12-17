const express = require('express')
const bodyParser = require("body-parser")
const {checkLogin} = require("./middleware/auth")
const apiRoutes = require("./routes")
const app = express()
const port = 4000
app.use(bodyParser.urlencoded({extended:true}))  // third partie middleware
app.use(bodyParser.json())

app.use((req,res,next)=>{
  console.log("A request sent")
  next()
})
app.use("/api",apiRoutes())

app.get("/",(req,res)=>{
    res.status(200).send("Hello")
})

app.get("/about",(req,res)=>{
    res.status(200).send("about")
})

app.get("/private",checkLogin,(req,res)=>{
    res.status(200).send("im a private route")
})

app.listen(port,()=>console.log(`App started on port ${port}`))