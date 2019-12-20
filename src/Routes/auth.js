const express = require('express');
const auth = require('../Controllers/auth');

const Router = express.Router();

Router.post('/register',auth.register);//localhost:8000/auth/register
Router.get('/register/Users',auth.registeredUser)
Router.post('/login',auth.login);//localhost:8000/auth/login

module.exports = Router;