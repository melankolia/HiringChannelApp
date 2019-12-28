const express = require('express');
const controller = require('../Controllers/company');
const authCheck = require('../Helpers/authCheck');

const Router = express.Router();

Router.get('/',authCheck.companyCheck,controller.getAllCompany);//localhost:8000/api/company
Router.get('/get/:username',controller.getCompany);//localhost:8000/api/company/get/:username
Router.post('/',authCheck.companyCheck,controller.postCompany);//localhost:8000/api/company
Router.patch('/:id',authCheck.companyCheck,controller.patchCompany);//localhost:8000/api/company/:id
Router.delete('/:id',authCheck.companyCheck,controller.deleteCompany);//localhost:8000/api/company/:id

module.exports = Router;