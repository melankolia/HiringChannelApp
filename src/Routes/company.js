const express = require('express');
const controller = require('../Controllers/company');

const Router = express.Router();

Router.get('/',controller.getAllCompany);//localhost:8000/api/company
Router.post('/',controller.postCompany);//localhost:8000/api/company
Router.patch('/:id',controller.patchCompany);//localhost:8000/api/company/:id
Router.delete('/:id',controller.deleteCompany);//localhost:8000/api/company/:id

module.exports = Router;