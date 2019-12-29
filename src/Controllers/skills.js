const model = require('../Models/skills');
const form = require('../Helpers/form');

module.exports = {
    getAllEngineerSkills: (_, res) =>{
        model.getAllEngineerSkills()
        .then(response => {
            form.success(res,response)})
        .catch(err => {
            res.json({
                status:'error',
                err});
        });
    },
    postEngineerSkills: (req,res) =>{
        const {body} = req;
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
               res.json({
                status:'error',   
                err})
            );
    },
    patchEngineerSkills: (req,res) =>{
        const {params, query} = req;
        model
            .patchEngineerSkills(query,params)
            .then(response => {
                res.json(response);
            })
            .catch(err => 
                res.json({
                    status:'error',
                    err})
            );
    },
    deleteEngineerSkills:(req,res)=>{
        model
        .deleteEngineerSkills(req)
        .then(response => {
            res.json(response);
        })
        .catch(err =>
            res.json({
                status:'error',
                err})
        );
    }
}