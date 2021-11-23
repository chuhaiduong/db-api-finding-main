const jwt = require('jsonwebtoken')
const User = require('../model/user')
const authController = {}

authController.signup = async(req, res) => {
	const user = new User(req.body)
	
	user.save((err, data) => {
		if(err) res.status(400).json('server error')

		res.status(201).json({
			'msg': 'Create account success',
			data
		})
	})
}

authController.signin = async(req, res) => {
	const {email, password} = req.body

	const user = await User.findOne({email: email})
	if(!user) return res.status(200).json({
			'msg': 'Email does not exist'
	})

    if(user.password !== password) return res.status(200).json({
		'msg': 'Password is incorrect'
	})

    const payload = {
    	id: user.id,
    	role: user.role,
   	}
    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
		expiresIn: '2h'
	})
	res.status(200).json({
		'token': accessToken
	})
}

module.exports = authController