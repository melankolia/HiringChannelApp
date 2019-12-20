const express = require('express');
const controller = require('../Controllers/landingpage');
const Router = express.Router();

Router.get('/', controller.getLanding);

module.exports = Router;