const mongoose = require("mongoose")
const Movie= require("../models/movie")
const User = require("../models/user")
const movieData = require("./data/movies.json")
const userData = require("./data/users.json")
require("dotenv").config()
const {MONGO_DEV_URL} = process.env
mongoose.set("strictQuery", false);
mongoose.connect(MONGO_DEV_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(async(x)=>{
    console.log(`Connected to database ${x.connections[0].name}`)
    await Movie.insertMany(movieData)
    await User.insertMany(userData)
    console.log("Database Seed Terminated")
    mongoose.connection.close(function(){
        console.log("Disconncted From Db ***")
        process.exit(0)
    })
  }).catch(err=>{
    console.log(`Error conecting to db: ${err.message}`)
  })