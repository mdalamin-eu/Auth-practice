const express=require('express')
const router = express.Router()
const User = require('../controllers/User')

router.post('/add',  User.registerAdd)
router.post('/activate', User.registeractivate)
router.post('/login', User.Login)
router.get('/lists',User.getUserList)




module.exports= router
