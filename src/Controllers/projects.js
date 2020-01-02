const model = require("../Models/projects");
const form = require("../Helpers/form");

module.exports = {
  getprojects: (req, res) => {
    const { query } = req;
    model
      .getprojects(query)
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
  }
};
