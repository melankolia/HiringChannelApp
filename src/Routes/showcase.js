const express = require("express");
const controller = require("../Controllers/showcase");
const authCheck = require("../Helpers/authCheck");

const Router = express.Router();

Router.get("/", authCheck.engineerCheck, controller.getAllEngineerShowcase); //localhost:8000/api/engineer/Showcase
Router.post("/", authCheck.engineerCheck, controller.postEngineerShowcase); //localhost:8000/api/engineer/Showcase
Router.patch("/:id", authCheck.engineerCheck, controller.patchEngineerShowcase); //localhost:8000/api/engineer/Showcase/:id
Router.delete(
  "/:id",
  authCheck.engineerCheck,
  controller.deleteEngineerShowcase
); //localhost:8000/api/engineer/Showcase/:id

module.exports = Router;
