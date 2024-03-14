
const express = require('express')
const path = require('path')
const userController = require('../../controllers/users/user.controller')
const userRouter = express.Router()

userRouter.get('/', userController.getUsers)
userRouter.get('/:id', userController.getUser)
userRouter.patch('/:id', userController.updateUser)
userRouter.delete('/:id', userController.deleteUser)

module.exports = userRouter // Export the router
