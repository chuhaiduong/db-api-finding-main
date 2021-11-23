const User = require('../model/user')

class userController{
    async list(req, res){
        try {
            if(req.query.email){
                console.log(req.query)
                res.status(200).json({'msg': 'query'})
            }
            res.status(200).json({'msg': 'no query'})
        } catch (error) {
            console.log(error)            
            res.status(500).json({
                msg: 'Server Error'
            })
        }
    }
}

module.exports = new userController