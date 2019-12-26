const model = require('../Models/showcase');
const form = require('../Helpers/form');

module.exports = {
    getAllEngineerShowcase: (_, res) =>{
        model.getAllEngineerShowcase()
        .then(response => {
            form.success(res,response)})
        .catch(err => {
            res.json({
                status:'error',
                err});
        });
    },
    postEngineerShowcase: (req,res) =>{
        const {body} = req;
        console.log(body);
        model
            .postEngineerShowcase(body)
            .then(response => {
                const data = {
                    id:response.id,
                    skills:body.Showcase
                };
                form.success(res,data);
            })
            .catch(err =>
                res.json({
                    status:'error',
                    err})
            );
    },
    patchEngineerShowcase: (req,res) =>{
        const {params, query} = req;
        console.log(params)
        console.log(query)
        model
            .patchEngineerShowcase(query,params)
            .then(response => {
                res.json(response);
            })
            .catch(err => 
                res.json({
                    status:'error',
                    err})
            );
    },
    deleteEngineerShowcase:(req,res)=>{
        const {params} = req;
        model
        .deleteEngineerShowcase(params)
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