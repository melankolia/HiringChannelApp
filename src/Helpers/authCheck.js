require('dotenv/config')
const jwt =require('jsonwebtoken')

module.exports = {
    engineerCheck : (req, res, next)=>{
        const { authorization, username } = req.headers
        if(!authorization || !username){
            return res.json({
                message: 'Unauthorized'
            })
        }
        const token = authorization.split(" ")[1]
        //decode JWT and validation
        //console.log(token);
        jwt.verify(token, process.env.SECRET, (err, decoded)=>{
            //console.log(decoded.response[0].role)
            //console.log(decoded.response[0].username)
            //console.log(req.headers.username)
            
            if(err && err.name === 'JsonWebTokenError'){
                return res.json({ 
                    message: 'Invalid Token!'
                })
            } 
            if(err && err.name === 'TokenExpiredError'){
                return res.json({
                    message: 'Expired Token!'
                })
            }
                
            //check if token is registered with correct users
            if(username !== decoded.response[0].username){
                return res.json({
                    message : 'Token is not Valid for selected users'
                })
            }
            if(decoded.response[0].role !== 'engineer'){
                return res.json({
                    message: 'Access Denied!, You\'re Company'
                })
            }
            next()
        })
    },
    companyCheck : (req, res, next)=>{
        const { authorization, username } = req.headers
        if(!authorization || !username){
            return res.json({
                message: 'Unauthorized'
            })
        }
        const token = authorization.split(" ")[1]
        //decode JWT and validation
        jwt.verify(token, process.env.SECRET, (err, decoded)=>{
            if(err && err.name === 'JsonWebTokenError'){
                return res.json({ 
                    message: 'Invalid Token!'
                })
            } 
            if(err && err.name === 'TokenExpiredError'){
                return res.json({
                    message: 'Expired Token!'
                })
            }
                
            //check if token is registered with correct username
            if(username !== decoded.response[0].username){
                return res.json({
                    message : 'Token is not Valid for selected username'
                })
            }
            if(decoded.response[0].role !== 'company'){
                return res.json({
                    message: 'Access Denied!, You\'re Engineer'
                })
            }
            next()
        })
    },
    check : (req, res, next)=>{
        const { authorization, username } = req.headers
        if(!authorization || !username){
            return res.json({
                message: 'Unauthorized'
            })
        }
        const token = authorization.split(" ")[1]
        //decode JWT and validation
        jwt.verify(token, process.env.SECRET, (err, decoded)=>{
            if(err && err.name === 'JsonWebTokenError'){
                return res.json({ 
                    message: 'Invalid Token!'
                })
            } 
            if(err && err.name === 'TokenExpiredError'){
                return res.json({
                    message: 'Expired Token!'
                })
            }
                
            //check if token is registered with correct username
            if(username !== decoded.response[0].username){
                return res.json({
                    message : 'Token is not Valid for selected username'
                })
            }
            next()
        })
    }
}