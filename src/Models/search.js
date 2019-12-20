const db = require('../Configs/database');
module.exports = {
    getAllEngineerSearch: (query) => {
        const sorting = query.sorting || 'ASC';
        const searchName = query.searchName || '';
        const searchSkills = query.searchSkills || '';
        return new Promise ((resolve, reject) => {
            db.query(`SELECT Engineer.id, Engineer.Name,Engineer.Description,Engineer.Location,
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
            ORDER BY \`Engineer\`.\`Name\` ${sorting} , \`Skills\` ${sorting} , \`DateUpdated\` ${sorting} `,(err, response) =>{
              if (!err){
                  resolve(response);
              }  
              else {
                  reject(err);
              };
            });
        });
    }
}