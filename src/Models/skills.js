const db = require('../Configs/database');
module.exports = {
    getAllEngineerSkills: () => {
        return new Promise ((resolve, reject) => {
            db.query('SELECT * FROM Skills',(err, response) =>{
              if (!err){
                  resolve(response);
              }  
              else {
                  reject(err);
              };
            });
        });
    },
    postEngineerSkills: body =>{
        console.log(body)
        //let {Name,Logo,Location,Description} = body;
        //const {name,description,id_skill,location,dateofbirth,id_showcase} = body;
        return new Promise ((resolve,reject) => {
            db.query(`INSERT INTO Skills SET ?`,[body],
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
    patchEngineerSkills: (query, params) => {
        return new Promise ((resolve, reject) => {
            db.query('UPDATE Skills SET ? where ?', [query,params],
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
    deleteEngineerSkills: req => {
        const {params, query} = req;
        return new Promise((resolve,reject) => {
            
            db.query('DELETE FROM Skills WHERE \`id_Engineer\` = ? AND \`SkillsName\` = ?',
            [params.id_Engineer,query[0]],
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