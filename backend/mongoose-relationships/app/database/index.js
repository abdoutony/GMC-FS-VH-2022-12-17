const mongoose = require("mongoose")
const User = require("../models/user")
const Order = require("../models/order")
const OrderLine = require("../models/OrderLine")
const Product = require("../models/product")
const userData = require("./data/users.json")
const orderData = require("./data/orders.json")
const orderLineData = require("./data/orderLines.json")
const productData = require("./data/products.json")
require("dotenv").config()
const {MONGO_DEV_URL} = process.env
mongoose.set("strictQuery", false);
mongoose.connect(MONGO_DEV_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(async(x)=>{
    console.log(`Connected to database ${x.connections[0].name}`)
    await User.insertMany(userData)
    await Product.insertMany(productData)
    console.log("Database Seed Terminated")
    await mongoose.connection.close()
    console.log("Disconncted From Db ***")
    process.exit(0)

  }).catch(err=>{
    console.log(`Error conecting to db: ${err.message}`)
  })

