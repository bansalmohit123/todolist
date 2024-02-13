const UserModel = require('../model/user.model');

class UserService{
    static async registeruser(email,password){
        try{
            const createuser = new UserModel({email,password});
            return  await createuser.save();

        }catch(error){
            throw error;
        }
    }

}

module.exports=UserService;