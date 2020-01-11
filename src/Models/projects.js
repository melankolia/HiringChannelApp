const db = require("../Configs/database");
module.exports = {
  getprojects: req => {
    console.log(req.query);
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT request_project.No, request_project.id_engineer, request_project.id_company, 
                Company.Name AS CompanyName, Engineer.Name AS EngineerName,
                request_project.name_project,request_project.status_project, request_project.status_engineer
                      FROM request_project 
                      LEFT JOIN Company ON  request_project.id_company = Company.id
                      LEFT JOIN Engineer ON request_project.id_engineer = Engineer.id
                      WHERE ? `,
        [req.query],
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

  patchprojects: (req, res) => {
    const { params, query } = req;
    console.log(params);
    console.log(query);
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE request_project SET ? WHERE ?;`,
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
  postproject: (req, res) => {
    console.log(req.body);
    //let {Name,Logo,Location,Description} = body;
    //const {name,description,id_skill,location,dateofbirth,id_showcase} = body;
    return new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO request_project SET ?`,
        [req.body],
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
  getprojectslength: (req, res) => {
    const params = req.params.id;
    //let {Name,Logo,Location,Description} = body;
    //const {name,description,id_skill,location,dateofbirth,id_showcase} = body;
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT GROUP_CONCAT(status_engineer) AS status FROM \`request_project\`
                  WHERE id_engineer = ?`,
        [params],
        (err, response) => {
          if (!err) {
            if (response[0].status) {
              // console.log("MASOK");
              
              let array = response[0].status.split(",");
              let project = [];
              let projectstatus = 0;
              
              for (i = 0; i <= array.length; i++) {
                if (array[i] === "Completed") {
                  console.log('+1', array[i]);
                  project.push(array[i]);
                  projectstatus++;
                } else if (array[i] === "Abandoned") {
                  console.log('+0', array[i]);
                  project.push(array[i]);
                } else {
                  continue;
                }
              }
              // console.log("1 ", projectstatus);
              // console.log("2 ", project.length);

              let successrate;

              if (projectstatus || project.length) {
                successrate = ((projectstatus / project.length) * 100) + " %";
              } else {
                successrate = "0 %";
              }

              // console.log(successrate);
              response = {
                project: project.length,
                successrate: successrate
              };
            } else {
              // console.log("DAK MASOK");
              response = {
                project: 0,
                successrate: "0 %"
              };
            }

            resolve(response);
          } else {
            reject(err);
          }
        }
      );
    });
  }

  // deleteEngineerSkills: req => {
  //     const {params, query} = req;
  //     return new Promise((resolve,reject) => {

  //         db.query('DELETE FROM Skills WHERE \`id_Engineer\` = ? AND \`SkillsName\` = ?',
  //         [params.id_Engineer,query[0]],
  //         (err,response) => {
  //             if (!err){
  //                 resolve(response);
  //             }
  //             else {
  //                 reject (err)
  //             }
  //         }
  //         )
  //     })
};
