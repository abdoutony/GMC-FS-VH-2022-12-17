const express = require("express")
const router = express.Router()
const movieRoutes = require("./movie")
const authRoutes = require('./auth')
module.exports = ()=>{

    router.use("/movies",movieRoutes())
    router.use("/auth",authRoutes())
    return router
}