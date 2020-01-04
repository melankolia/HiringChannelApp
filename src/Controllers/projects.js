const model = require("../Models/projects");
const form = require("../Helpers/form");

module.exports = {
  getprojects: (req, res) => {
    model
      .getprojects(req)
      .then(response => {
        form.success(res, response);
      })
      .catch(err => {
        res.json({
          status: "error",
          err
        });
      });
  },
  patchprojects: (req, res) => {
    model
      .patchprojects(req, res)
      .then(response => {
        form.success(res, response);
      })
      .catch(err => {
        res.json({
          status: "error",
          err
        });
      });
  },
  postproject: (req, res) => {
    model
      .postproject(req, res)
      .then(response => {
        form.success(res, response);
      })
      .catch(err => {
        res.json({
          status: "error",
          err
        });
      });
  },
  getprojectslength: (req, res) => {
    model
      .getprojectslength(req)
      .then(response => {
        form.success(res, response);
      })
      .catch(err => {
        res.json({
          status: "error",
          err
        });
      });
  }
};
