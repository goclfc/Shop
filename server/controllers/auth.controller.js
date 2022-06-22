const { authService } = require('../services');

const authController = {
    async register(req, res, next){
        try{
            const {email,password} = req.body
          
            

            res.status(200).send({
                email,password
            })

        } catch( error){
            console.log(error)
        }
    },
    async signin(req, res, next){
        try{

        } catch(error){

        }
    },
    async isauth(req, res, next){
        try{

        } catch(error){

        }
    }
}

module.exports = authController;