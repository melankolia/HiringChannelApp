const model = require('../Models/auth');
const form = require('../Helpers/form'); 
const bcrypt = require('bcryptjs');

module.exports = {
    register: (req, res) =>{
        const {body} = req;
        const regExp = /^(\D){5,}$/.test(body.username);
        const password = bcrypt.hashSync(body.password,8);
        console.log(regExp);
        if (regExp == true){
            model.register(req,body.username,password,body.role)
            .then(response => {
                form.success(res,response)})
            .catch(err => {
                res.json({
                    status:"error",
                    msg:err,
                })
            });
        }
        else {
            res.json({
                error: true,
                message: 'Invalid Username!'
            })
        }
    },
    login : (req, res)=>{
        console.log(req.body.username)
        const role = req.body.role
        const username = req.body.username
        const password = req.body.password
        if(!username){
            res.json({
                message : 'username required'
            })
        }else{
            model.login(username,role)
            .then(response=>{
                console.log(response[0].password)
                console.log(password)
                let validPassword = bcrypt.compareSync(password, response[0].password)
                if (!validPassword){
                    res.json({
                        message:'Invalid Password, Login Failed!!!'
                    })
                }
                else{
                    res.json({
                        message:"Login Success",
                        username: response[0].username,
                        role:response[0].role

                    })
                }
            })
            .catch(err=>{
                err = "Password Comparison Error"
                res.json({
                    msg:err
                })
            })
        }    
    },
    registeredUser: (_,res) =>{
        model.registeredUser()
            .then(response => {
                form.success(res,response)})
            .catch(err => {
                res.json({
                    status:"error",
                    msg:err,
                })
            });
    }
}