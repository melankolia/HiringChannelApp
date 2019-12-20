const express = require('express');
const controller = require('../Controllers/engineer');

const Router = express.Router();

Router.get('/',controller.getAllEngineer);//localhost:8000/api/engineer
Router.post('/',controller.postEngineer);//localhost:8000/api/engineer
Router.patch('/:id',controller.patchEngineer);//localhost:8000/api/engineer/:id
Router.delete('/:id',controller.deleteEngineer);//localhost:8000/api/engineer/:id

module.exports = Router;