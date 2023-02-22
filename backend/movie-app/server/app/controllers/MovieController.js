const Movie = require("../models/movie")
exports.getAllMovies = async (req,res)=>{
    try{
        const movies = await Movie.find({},{title:0})
        res.status(200).json({
            msg:"Get with success",
            movies
        })
    }catch(err){
        res.status(500).send(err.message)
    }
}

exports.getMovieById = async (req,res)=>{
    try{
      const {id} = req.params
      const movie = await Movie.findById(id)
      res.status(200).json({
        msg:"Get with success",
        movie
      })
    }catch(err){
        res.status(500).send(err.message)
    }
}

exports.addNewMovie = async (req,res)=>{
    try{
      const {title,description,rating,category,poster,trailer} = req.body
      // validations cote backend
      if(!(title && description && category && rating && poster &&trailer)){
       return  res.status(400).send("All fields are required")
      }
      const new_movie = {
        title,description,rating,category,poster,trailer
      }

      const movie = new Movie(new_movie)
      const saved_movie = await movie.save()
      return res.status(201).json({
        msg:"Create with success",
        created:saved_movie
      })
    }catch(err){
        res.status(500).send(err.message)
    }
}

exports.updateMovie = async (req,res)=>{
    try{
        const {id} = req.params
        const {title,description,rating,category,poster,trailer} = req.body
        const movie = await Movie.findById(id)
        if(!movie){
            return res.status(404).send("Not found")
        }
        const updated_movie = {title,description,rating,category,poster,trailer}
        const update = await Movie.findOneAndUpdate({_id:id},updated_movie,{
            new:true,useFindAndModify:false
        })
        return res.status(200).json({
            msg:"Update with success",
            update
        })
    }catch(err){
        res.status(500).send(err.message)
    }
}

exports.deleteMovie = async (req,res)=>{
    try{
        const {id} = req.params
        await Movie.deleteOne({_id:id})
        res.status(200).json({
            msg:"Delted with success",
            id
        })
    }catch(err){
        res.status(500).send(err.message)
    }
}