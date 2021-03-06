const model = require("../Models/company");
const form = require("../Helpers/form");

module.exports = {
  getAllCompany: (_, res) => {
    model
      .getAllCompany()
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
  postCompany: (req, res) => {
    const { body } = req;
    console.log(body);
    model
      .postCompany(body)
      .then(response => {
        const data = {
          id: response.insertId,
          nama: body.Name,
          logo: body.Logo,
          location: body.Location,
          description: body.Description
        };
        form.success(res, data);
      })
      .catch(err =>
        res.json({
          status: "error",
          err
        })
      );
  },
  patchCompany: (req, res) => {
    const { params, query } = req;
    console.log(params);
    console.log(query);
    model
      .patchCompany(query, params)
      .then(response => {
        res.json(response);
      })
      .catch(err =>
        res.json({
          status: "error",
          err
        })
      );
  },
  deleteCompany: (req, res) => {
    const { params } = req;
    model
      .deleteCompany(params)
      .then(response => {
        res.json(response);
      })
      .catch(err =>
        res.json({
          status: "error",
          err
        })
      );
  },
  getCompany: (req, res) => {
    const { params } = req;
    model
      .getCompany(params)
      .then(response => {
        res.json(response);
      })
      .catch(err => {
        res.json({
          status: "error",
          err
        });
      });
  }
};
