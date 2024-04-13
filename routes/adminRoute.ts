const express = require('express')
const router = express.Router()
const {adminLogin} = require('../controller/adminController')

router.post('/adminLogin',adminLogin)


module.exports = router