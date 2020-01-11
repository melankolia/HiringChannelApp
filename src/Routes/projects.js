const express = require("express");
const controller = require("../Controllers/projects");

const Router = express.Router();

Router.get("/", controller.getprojects); //localhost:8000/api/projects
Router.get("/:id", controller.getprojectslength) ; //localhost:8000/api/projects/:id
Router.patch("/:No", controller.patchprojects); //localhost:8000/api/projects
Router.post("/", controller.postproject)

module.exports = Router;
