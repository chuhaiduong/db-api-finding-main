const jwt = require('jsonwebtoken')

const userAuth = (req, res, next) => {
    try {
        const token = req.header("Authorization").split(' ')[1]

        if(!token) return res.status(401).json({msg: 'Invalid Authentication.'})

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if(err) return res.status(403).json({msg: 'Invalid_Authentication'})

            req.user = user
            next()
        })
    } catch (error) {
        res.status(401).json({msg: "Can't access"})
    }
}

module.exports = {userAuth, roleAuth}