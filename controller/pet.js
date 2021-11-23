const Pet = require('../model/pet')

class petController{
    async list(req, res){
        try {
            const data = await Pet.find()
            res.status(200).json(data)
        } catch (error) {
            console.log(error)            
            res.status(500).json({
                msg: 'Server Error'
            })
        }
    }

    create(req, res){
       const pet = new Pet(req.body)
       pet.save()
       res.status(201).json('them thanh cong')
    }
}

module.exports = new petController