const express = require('express')
const bodyParser = require("body-parser")
const {products} =require("./data")
const app = express()
const port = 4000

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

// route def
app.get('/',(req,res)=>{
    res.setHeader('content-type', 'text/html');
    res.status(200).send("<h1>Home page</h1>")
})
app.get('/ABOUT',(req,res)=>{
    res.setHeader('content-type', 'text/html');
    res.status(200).send("<h1>About page</h1>")
})
app.get('/contact',(req,res)=>{
    res.setHeader('content-type', 'text/html');
    res.status(200).send("<h1>Contacts page</h1>")
})


const checkLogin = (req,res,next)=>{
    const {authorization} = req["headers"]
    if(!authorization || authorization !== "secret"){
        res.status(401).send("unautorized")
    }else{
        next()
    }
}


// products managment
app.get("/products",checkLogin,(req,res)=>{
    res.status(200).json(products)
})
app.get("/products/:id/:tst",(req,res)=>{
    console.log(req.params)
    const product = products.find((el)=>el.id === parseInt(req.params.id))
    if(product){
       res.status(200).json(product)    
    }else{
        res.status(404).send("product not found")
    }
})

app.post("/addproduct",(req,res)=>{
    console.log(req.body)
    res.status(200).send("product received")
})


app.listen(port,()=>console.log(`App started on port ${port}`))