const db = require("../Configs/database");
module.exports = {
  getAllEngineerShowcase: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM Showcases", (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  },
  postEngineerShowcase: body => {
    console.log(body);
    //let {Name,Logo,Location,Description} = body;
    //const {name,description,id_skill,location,dateofbirth,id_showcase} = body;
    return new Promise((resolve, reject) => {
      db.query(`INSERT INTO Showcases SET ?`, [body], (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  },
  patchEngineerShowcase: (query, params) => {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE Showcases SET ? where ?",
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
  deleteEngineerShowcase: params => {
    return new Promise((resolve, reject) => {
      db.query("DELETE FROM Showcases WHERE ?", [params], (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  }
};
