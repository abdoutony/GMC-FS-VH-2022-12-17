const express = require("express")
require("dotenv").config()
require("./config/db").connect()
const apiRoutes = require("./routes")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()

app.use(bodyParser.urlencoded({extended:true}))  // third partie middleware
app.use(bodyParser.json())

app.use(cors())


app.get("/",(req,res)=>{
    res.send("Hello")
})
app.use("/api",apiRoutes())


const PORT =process.env.PORT


app.listen(PORT,()=>console.log(`App is listening on port: ${PORT}`))