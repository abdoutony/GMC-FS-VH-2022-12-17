const express = require("express")
require("dotenv").config()
require("./config/db").connect()
const bodyParser = require("body-parser")
const {Exemple} = require("./models/exemple")
const app = express()

app.use(bodyParser.urlencoded({extended:true}))  // third partie middleware
app.use(bodyParser.json())


app.get("/",(req,res)=>{
    res.send("Hello")
})

app.post("/exemple",async  (req,res)=>{
     try{
        const {title,description} = req.body
        if(!title || !description){
           return res.send("All fields are required")
        }

        const exemple = new Exemple({
            title:title,
            description:description
        })

        const savedUser = await exemple.save()
        res.status(200).send(savedUser)

     }catch(err){
        res.status(500).send("server error")
     }
})


const PORT =process.env.PORT


app.listen(PORT,()=>console.log(`App is listening on port: ${PORT}`))