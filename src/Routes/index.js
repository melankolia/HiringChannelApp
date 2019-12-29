const express = require('express');
const company = require('./company');
const engineer = require('./engineer');
const skills = require('./skills');
const showcase = require('./showcase')
const landingPage = require('./landing');
const search = require('./search');
const auth = require('./auth');
const Router = express.Router();

Router.use('/',landingPage);
Router.use('/api/Company', company);
Router.use('/api/Engineer', engineer);
Router.use('/api/Engineer/skills',skills);
Router.use('/api/Engineer/showcase',showcase);
Router.use('/api/Engineer/search',search);
Router.use('/auth',auth);


module.exports = Router;