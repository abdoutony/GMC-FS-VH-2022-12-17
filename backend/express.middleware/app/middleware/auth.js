function checkLogin(req,res,next){
    const token = req["headers"].authorization
    if(!token){
       return  res.status(401).send("Unauthorized a token is reauired for auth")
    }
    if(token!=="secret"){
     return  res.status(409).send("Invalid token")
    }
    return next()
}

module.exports ={checkLogin}