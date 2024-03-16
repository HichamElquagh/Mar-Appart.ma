const express = require('express');
const path = require('path');
const AuthController = require('../../controllers/auth/auth.controller');

const authRouter = express.Router();


authRouter.post('/register', AuthController.registerUser);
authRouter.post('/login', AuthController.loginUser);
authRouter.post('/logout', AuthController.logoutUser);





module.exports = authRouter; // Export the router