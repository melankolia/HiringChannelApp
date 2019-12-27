const express = require('express');
const controller = require('../Controllers/engineer');
const authCheck = require('../Helpers/authCheck');

const Router = express.Router();

Router.get('/',authCheck.check,controller.getAllEngineer);//localhost:8000/api/engineer
Router.get('/:username',controller.getEngineer);//localhost:8000/api/engineer/:username
Router.post('/',authCheck.engineerCheck, controller.postEngineer);//localhost:8000/api/engineer
Router.patch('/:id',authCheck.engineerCheck, controller.patchEngineer);//localhost:8000/api/engineer/:id
Router.delete('/:id',authCheck.engineerCheck, controller.deleteEngineer);//localhost:8000/api/engineer/:id

module.exports = Router;
