let express = require('express')
let routes = express.Router()
let usercontroller = require('../controllers/user_controller')

// hier schrijven we router endpoints
routes.get('/user', usercontroller.readUser)
routes.get('/user/:id', usercontroller.getUserById)
routes.post('/login', usercontroller.userLogin)
routes.post('/register', usercontroller.createUser)
routes.put('/user', usercontroller.updateUser)
routes.delete('/user/:id', usercontroller.deleteUser)

module.exports = routes