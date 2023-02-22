const express = require("express")
const router = express.Router()
const MovieController = require("../controllers/MovieController")
module.exports = ()=>{
 
    router.get("/",MovieController.getAllMovies);
    router.get('/:id',MovieController.getMovieById)
    router.post("/",MovieController.addNewMovie)
    router.put("/:id",MovieController.updateMovie)
    router.delete("/:id",MovieController.deleteMovie)


    return router
}

