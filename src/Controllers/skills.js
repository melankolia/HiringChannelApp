const model = require('../Models/skills');
const form = require('../Helpers/form');

module.exports = {
    getAllEngineerSkills: (_, res) =>{
        model.getAllEngineerSkills()
        .then(response => {
            form.success(res,response)})
        .catch(err => {
            console.log(err);
        });
    },
    postEngineerSkills: (req,res) =>{
        const {body} = req;
        console.log(body);
        model
            .postEngineerSkills(body)
            .then(response => {
                const data = {
                    id:response.id,
                    skills:body.SkillsName
                };
                form.success(res,data);
            })
            .catch(err =>
                console.log(err)
            );
    },
    patchEngineerSkills: (req,res) =>{
        const {params, query} = req;
        console.log(params)
        console.log(query)
        model
            .patchEngineerSkills(query,params)
            .then(response => {
                res.json(response);
            })
            .catch(err => 
                console.log(err)
            );
    },
    deleteEngineerSkills:(req,res)=>{
        const {params} = req;
        model
        .deleteEngineerSkills(params)
        .then(response => {
            res.json(response);
        })
        .catch(err =>
            console.log(err)
        );
    }
}