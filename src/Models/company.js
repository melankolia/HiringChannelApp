const db = require("../Configs/database");
module.exports = {
  getAllCompany: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM Company", (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  },
  postCompany: body => {
    //console.log(body)
    //let {Name,Logo,Location,Description} = body;
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO Company SET ? ", [body], (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  },
  patchCompany: (query, params) => {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE Company SET ? where ?",
        [query, params],
        (err, response) => {
          if (!err) {
            resolve(response);
          } else {
            reject(err);
          }
        }
      );
    });
  },
  deleteCompany: params => {
    return new Promise((resolve, reject) => {
      db.query("DELETE FROM Company WHERE ?", [params], (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  },
  getCompany: params => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM Company WHERE ?`, [params], (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  }
};
