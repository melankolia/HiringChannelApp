const model = require('../Models/search');
const form = require('../Helpers/form');

module.exports = {
    getAllEngineerSearch: (req, res) =>{
        const {query} = req;
        model.getAllEngineerSearch(query)
        .then(response => {
            form.success(res,response)})
        .catch(err => {
            res.json({
                status:'error',
                err});
        });
    }
}