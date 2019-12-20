const express = require('express');
const controller = require('../Controllers/skills');

const Router = express.Router();

Router.get('/',controller.getAllEngineerSkills);//localhost:8000/api/engineer/skills
Router.post('/',controller.postEngineerSkills);//localhost:8000/api/engineer/skills
Router.patch('/:id',controller.patchEngineerSkills);//localhost:8000/api/engineer/skills/:id
Router.delete('/:id',controller.deleteEngineerSkills);//localhost:8000/api/engineer/skills/:id

module.exports = Router;