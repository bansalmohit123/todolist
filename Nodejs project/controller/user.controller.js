const UserService = require('../services/user.services');

exports.register = async(req,res,next)=>{
    try {
        const{email,password} = req.body;
        const succesres = await UserService.registeruser(email,password);
        res.json({status:true,success:"user register succcesfully"})
        
    } catch (error) {
        throw error
    }
}