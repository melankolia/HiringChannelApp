const db = require("../Configs/database");
module.exports = {
  getAllEngineer: query => {
    let sort = query.Sorting || "ASC";
    let limit = query.Limit || 100;
    let page = query.Page || 1;
    let offset = (page - 1) * limit;

    return new Promise((resolve, reject) => {
      // Pagination
      db.query(`SELECT COUNT(id) AS Total from Engineer`, (err, result) => {
        if (!err) {
          let totalData = result[0].Total;
          let totalPage = Math.ceil(result[0].Total / limit);
          db.query(
            `SELECT Engineer.id,Engineer.username, 
                Engineer.Name,Engineer.Title,Engineer.Location,Engineer.Description,
                GROUP_CONCAT(DISTINCT Showcases.Showcase) AS Showcase ,
                GROUP_CONCAT(DISTINCT Skills.SkillsName) AS Skills,
                Engineer.DateofBirth,Engineer.DateCreated, Engineer.DateUpdated 
                FROM \`Engineer\` 
                LEFT JOIN \`Showcases\`ON Engineer.id = Showcases.id_Engineer 
                LEFT JOIN \`Skills\` ON Engineer.id = \`Skills\`.\`id_Engineer\`
                GROUP BY Engineer.id 
                ORDER BY \`Engineer\`.\`Name\` ${sort}, \`Skills\` ${sort}, \`DateUpdated\` ${sort}
                LIMIT ${limit} OFFSET ${offset}`,
            (err, response, field) => {
              if (!err) {
                // Pagination
                let nextPage = [];
                let previousPage = [];
                let arrayPage = [];
                if (nextPage > totalPage) {
                  nextPage = totalPage;
                }
                for (i = parseInt(page) + 1; i <= totalPage; i++) {
                  nextPage.push(i);
                }
                for (i = parseInt(page) - 1; i >= 1; i--) {
                  previousPage.push(i);
                }
                for (i = parseInt(page); i <= totalPage; i++) {
                  arrayPage.push(i);
                }
                response = {
                  totalData: totalData,
                  totalpage: totalPage,
                  arrayPage: arrayPage,
                  currentPage: parseInt(page),
                  totalNextPage: nextPage.length,
                  nextPage: nextPage,
                  totalPreviousPage: previousPage.length,
                  previousPage: previousPage,
                  response
                };

                resolve(response);
              } //Pagination
              else {
                reject(err);
              }
            }
          );
        } else {
          reject(err);
        }
      });
    });
  },
  postEngineer: body => {
    //console.log(body)
    //let {Name,Logo,Location,Description} = body;
    const { name, description, title, location, dateofbirth } = body;
    return new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO Engineer (Name, Description,Title, Location,DateofBirth,DateCreated,DateUpdated) 
            Values ("${name}","${title}","${description}","${location}","${dateofbirth}",NOW(),NOW())`,
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
  patchEngineer: (query, params) => {
    var n = new Date();
    var currentDate =
      n.getFullYear() +
      "-" +
      (n.getMonth() + 1) +
      "-" +
      n.getDate() +
      " " +
      n.getHours() +
      ":" +
      n.getMinutes() +
      ":" +
      n.getSeconds();
    console.log(query, params);
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE Engineer SET `DateUpdated` = ?, ? where ?",
        [currentDate, query, params],
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
  deleteEngineer: params => {
    return new Promise((resolve, reject) => {
      db.query("DELETE FROM Engineer WHERE ?", [params], (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  },
  getEngineer: params => {
    console.log(params);
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT Engineer.id,Engineer.username, 
            Engineer.Name,Engineer.Title,Engineer.Location,Engineer.Description,
            GROUP_CONCAT(DISTINCT Showcases.Showcase) AS Showcase ,
            GROUP_CONCAT(DISTINCT Skills.SkillsName) AS Skills,
            Engineer.DateofBirth,Engineer.DateCreated, Engineer.DateUpdated 
            FROM \`Engineer\` 
            LEFT JOIN \`Showcases\`ON Engineer.id = Showcases.id_Engineer 
            LEFT JOIN \`Skills\` ON Engineer.id = \`Skills\`.\`id_Engineer\`
            WHERE ? 
            GROUP BY Engineer.id`,
        [params],
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
  getEngineerDetail: params => {
    console.log(params);
    params = params.id;
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT Engineer.id,Engineer.username, Engineer.Name,Engineer.Title,Engineer.Location,Engineer.Description,
            GROUP_CONCAT(DISTINCT Showcases.Showcase) AS Showcase ,
            GROUP_CONCAT(DISTINCT Skills.SkillsName) AS Skills,
            Engineer.DateofBirth,Engineer.DateCreated, Engineer.DateUpdated 
            FROM \`Engineer\`
            LEFT JOIN \`Showcases\`ON Engineer.id = Showcases.id_Engineer 
            LEFT JOIN \`Skills\` ON Engineer.id = \`Skills\`.\`id_Engineer\`
            WHERE Engineer.id = ?
            GROUP BY Engineer.id `,
        [params],
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
};
