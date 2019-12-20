const express = require('express');
const controller = require('../Controllers/search');

const Router = express.Router();

Router.get('/',controller.getAllEngineerSearch);//localhost:8000/api/engineer/skills

module.exports = Router;