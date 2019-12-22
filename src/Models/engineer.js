const db = require('../Configs/database');
module.exports = {
    getAllEngineer: (query) => {
        let sort = query.Sorting || 'ASC';
        let limit = query.Limit || 5;
        let page = query.Page || 1;
        let offset = (page - 1) * limit;

        return new Promise ((resolve, reject) => {
            db.query(`SELECT COUNT(id)  AS Total from Engineer`,(err, result) =>{
              if (!err){
                let totalPage = Math.ceil(result[0].Total / limit)
                db.query(`SELECT Engineer.id, 
                Engineer.Name,Engineer.Description,Engineer.Location,
                GROUP_CONCAT(DISTINCT Showcases.Showcase) AS Showcase ,
                GROUP_CONCAT(DISTINCT Skills.SkillsName) AS Skills,
                Engineer.DateofBirth,Engineer.DateCreated, Engineer.DateUpdated 
                FROM \`Engineer\` 
                LEFT JOIN \`Showcases\`ON Engineer.id = Showcases.id_Engineer 
                LEFT JOIN \`Skills\` ON Engineer.id = \`Skills\`.\`id_Engineer\`
                GROUP BY Engineer.id 
                ORDER BY \`Engineer\`.\`Name\` ${sort}, \`Skills\` ${sort}, \`DateUpdated\` ${sort}
                LIMIT ${limit} OFFSET ${offset}`,
                (err, response, field) =>{
                  if (!err){
                      let nextPage = parseInt(page) + 1;
                      let previousPage = page - 1 || 1;
                      if (nextPage > totalPage){
                          nextPage = totalPage
                      }
                      response = {
                          totalpage : totalPage,
                          currentPage:parseInt(page),
                          nextPage:nextPage,
                          previousPage:previousPage,
                          response: response
                      }
                      resolve(response);
                  }
                  else {
                      reject(err);
                  };
                });
              }
              else {
                  reject(err);
              };
            });
        });
    },
    postEngineer: body =>{
        //console.log(body)
        //let {Name,Logo,Location,Description} = body;
        const {name,description,location,dateofbirth} = body;
        return new Promise ((resolve,reject) => {
            db.query(`INSERT INTO Engineer (Name, Description, Location,DateofBirth,DateCreated,DateUpdated) 
            Values ("${name}","${description}","${location}","${dateofbirth}",NOW(),NOW())` ,
            (err,response) =>{
                if (!err){
                    resolve(response);
                }
                else{
                    reject(err);
                }
            })
        })
    },
    patchEngineer: (query, params) => {
        var n = new Date();
        var currentDate =  n.getFullYear() + "-"
                        + (n.getMonth() + 1) + "-"
                        + n.getDate()+ " "
                        + n.getHours()+ ":"
                        + n.getMinutes()+ ":"
                        + n.getSeconds();
        return new Promise ((resolve, reject) => {
            db.query('UPDATE Engineer SET `DateUpdated` = ?, ? where ?', [currentDate,query,params],
            (err,response) => {
                if (!err){
                    resolve(response);
                }
                else {
                    reject(err);
                }
            }                
            )
        })
    },
    deleteEngineer: params => {
        return new Promise((resolve,reject) => {
            db.query('DELETE FROM Engineer WHERE ?',
            [params],
            (err,response) => {
                if (!err){
                    resolve(response);
                }
                else {
                    reject (err)
                }
            }
            )
        })
    }

}