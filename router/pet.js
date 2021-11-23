const express = require('express')
const router = express.Router()
const petController = require('../controller/pet')

router.get('', petController.list)
router.post('', petController.create)

module.exports = router