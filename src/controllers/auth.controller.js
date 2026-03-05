const userModel = require("../models/user.model");

async function userRegisterController(req, res){
    const {email, password, name} = req.body;

    const isExists = await userModel.findOne({
        email : email
    })
}

module.exports = {
    userRegisterController
}