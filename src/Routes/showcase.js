const express = require('express');
const controller = require('../Controllers/showcase');

const Router = express.Router();

Router.get('/',controller.getAllEngineerShowcase);//localhost:8000/api/engineer/Showcase
Router.post('/',controller.postEngineerShowcase);//localhost:8000/api/engineer/Showcase
Router.patch('/:id',controller.patchEngineerShowcase);//localhost:8000/api/engineer/Showcase/:id
Router.delete('/:id',controller.deleteEngineerShowcase);//localhost:8000/api/engineer/Showcase/:id

module.exports = Router;