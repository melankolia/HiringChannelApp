const express = require('express');
const controller = require('../Controllers/skills');
const authCheck = require('../Helpers/authCheck')

const Router = express.Router();

Router.get('/',authCheck.engineerCheck,controller.getAllEngineerSkills);//localhost:8000/api/engineer/skills
Router.post('/',authCheck.engineerCheck,controller.postEngineerSkills);//localhost:8000/api/engineer/skills
Router.patch('/:id',authCheck.engineerCheck,controller.patchEngineerSkills);//localhost:8000/api/engineer/skills/:id
Router.delete('/:id_Engineer',authCheck.engineerCheck,controller.deleteEngineerSkills);//localhost:8000/api/engineer/skills/:id

module.exports = Router;