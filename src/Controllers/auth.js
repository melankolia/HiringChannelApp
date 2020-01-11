const model = require("../Models/auth");
const form = require("../Helpers/form");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  register: (req, res) => {
    const { body } = req;
    const regExp = /^(\D){5,}$/.test(body.username);
    const password = bcrypt.hashSync(body.password, 8);
    //console.log(regExp);
    if (
      regExp == true &&
      body.username.length > 0 &&
      body.password.length > 0 &&
      body.role.length > 0
    ) {
      model
        .register(req, body.username, password, body.role)
        .then(response => {
          form.success(res, response);
        })
        .catch(err => {
          res.json({
            status: "error",
            message: err
          });
        });
    } else {
      res.json({
        error: true,
        status: "error",
        message: "Invalid Username!"
      });
    }
  },
  login: (req, res) => {
    //console.log(req.body.username)
    const username = req.body.username;
    const password = req.body.password;
    console.log(req.body);
    if (!username) {
      res.json({
        status: "error",
        message: "username required"
      });
    } else {
      model
        .login(username)
        .then(response => {
          //console.log(response[0].password)
          //console.log(password)
          let validPassword = bcrypt.compareSync(
            password,
            response[0].password
          );
          if (!validPassword) {
            res.json({
              status: "error",
              message: "Invalid Password, Login Failed!!!"
            });
          } else {
            jwt.sign(
              { response },
              process.env.SECRET,
              { expiresIn: "1d" },
              (err, token) => {
                console.log({ respon: response, token: token });
                res.json({
                  status: 200,
                  message: "Login Success",
                  username: response[0].username,
                  role: response[0].role,
                  token
                });
              }
            );
          }
        })
        .catch(err => {
          err = "Invalid Username & Password";
          res.json({
            status: "error",
            message: err
          });
        });
    }
  },
  registeredUser: (_, res) => {
    model
      .registeredUser()
      .then(response => {
        form.success(res, response);
      })
      .catch(err => {
        res.json({
          status: "error",
          message: err
        });
      });
  }
};
