const model = require('../Models/engineer');
const form = require('../Helpers/form');

module.exports = {
    getAllEngineer: (req, res) =>{
        const {query} = req;
        //console.log(query)
        model.getAllEngineer(query)
        .then(response => {
            form.success(res,response)})
        .catch(err => {
            console.log(err);
        });
    },
    postEngineer: (req,res) =>{
        const {body} = req;
        console.log(body);
        model
            .postEngineer(body)
            .then(response => {
                const data = {
                    id:response.id,
                    name:body.name,
                    description:body.description,
                    dateofbirth:body.dateofbirth,
                    id_skills:body.id_skills,
                    location:body.location,
                    id_showcase:body.id_showcase,
                };
                form.success(res,data);
            })
            .catch(err =>
                console.log(err)
            );
    },
    patchEngineer: (req,res) =>{
        const {params, query} = req;
        console.log(params)
        console.log(query)
        model
            .patchEngineer(query,params)
            .then(response => {
                res.json(response);
            })
            .catch(err => 
                console.log(err)
            );
    },
    deleteEngineer:(req,res)=>{
        const {params} = req;
        model
        .deleteEngineer(params)
        .then(response => {
            res.json(response);
        })
        .catch(err =>
            console.log(err)
        );
    }
}
