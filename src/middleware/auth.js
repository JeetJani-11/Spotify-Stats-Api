const auth = (req , res , next) => {
    try{
        const access_token = req.header('Authorization').replace('Bearer ' , '')
        console.log(access_token)
        req.access_token = access_token
        next()
    }catch(e){
        res.status(401).send({ error :'Please authenticate'})
    }
}

module.exports = auth