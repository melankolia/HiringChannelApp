const db = require("../Configs/database");
module.exports = {
  getAllEngineerSearch: query => {
    console.log(query)
    const sorting = query.sorting || "ASC";
    const searchName = query.searchName || "";
    const searchSkills = query.searchSkills || "";
    let sort = query.Sorting || "ASC";
    let limit = query.Limit || 100;
    let page = query.Page || 1;
    let offset = (page - 1) * limit;
    return new Promise((resolve, reject) => {
      db.query(`SELECT COUNT(id) AS Total from Engineer`, (err, result) => {
        if (!err) {
          let totalData = result[0].Total;
          let totalPage = Math.ceil(totalData / limit);
          db.query(
            `SELECT Engineer.id, Engineer.Name,Engineer.Title,Engineer.Location,Engineer.Description,
                    GROUP_CONCAT(DISTINCT Showcases.Showcase) AS Showcases,
                    GROUP_CONCAT(DISTINCT Skills.SkillsName) AS Skills,
                    Engineer.DateofBirth,Engineer.DateCreated, Engineer.DateUpdated 
                    FROM \`Engineer\` 
                    LEFT JOIN \`Showcases\`
                    ON Engineer.id= Showcases.id_Engineer
                    LEFT JOIN \`Skills\` 
                    ON Engineer.id = \`Skills\`.\`id_Engineer\`
                    WHERE Engineer.Name LIKE \'%${searchName}%\' AND Skills.SkillsName LIKE \'%${searchSkills}%\'
                    GROUP BY Engineer.id
                    ORDER BY \`Engineer\`.\`Name\` ${sorting} , \`Skills\` ${sorting} , \`DateUpdated\` ${sorting}
                    LIMIT ${limit} OFFSET ${offset}`,
            (err, response) => {
              if (!err) {
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
              } else {
                reject(err);
              }
            }
          );
        } else {
          reject(err);
        }
      });
    });
  }
};
