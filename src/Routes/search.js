const express = require("express");
const controller = require("../Controllers/search");
const authCheck = require("../Helpers/authCheck");

const Router = express.Router();

Router.get("/", authCheck.check, controller.getAllEngineerSearch); //localhost:8000/api/engineer/skills

module.exports = Router;
