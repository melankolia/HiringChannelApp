const db = require("../Configs/database");
module.exports = {
  getprojects: () => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT request_project.No, request_project.id_engineer, request_project.id_company, 
                             Company.Name,request_project.name_project,request_project.status_project, request_project.status_engineer
                      FROM request_project 
                      LEFT JOIN Company 
                      ON  request_project.id_company = Company.id`,
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
  }
  // },
  // postEngineerSkills: body =>{
  //     console.log(body)
  //     //let {Name,Logo,Location,Description} = body;
  //     //const {name,description,id_skill,location,dateofbirth,id_showcase} = body;
  //     return new Promise ((resolve,reject) => {
  //         db.query(`INSERT INTO Skills SET ?`,[body],
  //         (err,response) =>{
  //             if (!err){
  //                 resolve(response);
  //             }
  //             else{
  //                 reject(err);
  //             }
  //         })
  //     })
  // },

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
