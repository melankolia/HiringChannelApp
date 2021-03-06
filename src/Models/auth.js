const db = require("../Configs/database");
module.exports = {
  register: (req, username, password, role) => {
    const { name, description, title, location, logo } = req.body;

    return new Promise((resolve, reject) => {
      db.query(
        "INSERT INTO users SET username=?,password=?,role=?",
        [username, password, role],
        err => {
          if (!err) {
            if (role === "engineer") {
              db.query(
                `INSERT INTO Engineer (Username, Name,Title, Description, Location,DateCreated,DateUpdated) 
                    Values ("${username}","${name}","${title}","${description}","${location}",NOW(),NOW())`,
                err => {
                  if (!err) {
                    let message = {
                      status: "Registration Success",
                      username: username,
                      name: name,
                      location: location,
                      description: description,
                      title: title
                    };
                    resolve(message);
                  } else {
                    console.log(err);
                    reject(err);
                  }
                }
              );
            } else if (role === "company") {
              db.query(
                `INSERT INTO Company (Username, Name, Logo, Location, Description)
                    Values("${username}","${name}","${logo}","${location}","${description}")`,
                err => {
                  if (!err) {
                    let message = {
                      status: "Registration Success",
                      name: name,
                      logo: logo,
                      location: location,
                      description: description
                    };
                    resolve(message);
                  } else {
                    reject(err);
                  }
                }
              );
            }
          } else {
            reject(err);
          }
        }
      );
    });
  },
  registeredUser: () => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT role, GROUP_CONCAT(DISTINCT username) as username FROM \`users\`  
            GROUP BY role`,
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
  login: username => {
    console.log(username);
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * From users where username = ?",
        [username],
        (err, response) => {
          console.log(response);
          if (!err) {
            resolve(response);
          } else {
            reject(err);
          }
        }
      );
    });
  }
};
