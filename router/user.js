const express = require('express');
const router = express.Router();
const userController = require('../controller/user')

router.get('', userController.list)

module.exports = router