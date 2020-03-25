const db = require('../models');
const Joi = require('joi');
const bcrypt = require("bcrypt");

const profile = async (req, res) => {
    const id = req.user.id;
    try {
        const user = await db.user.findByPk(id, {attributes: ['name','id', 'email', 'createdAt']});
        if (!user) {
            return res.status(404).json({message: "User not found"});
        }
        return res.json(user);
    } catch (e) {
        throw e;
    }

};

const changePassword = async (req, res) => {
    const old_password = req.body.old_password;
    const new_password = req.body.new_password;


    const schema = Joi.object().keys({
        old_password: Joi.string().required(),
        new_password: Joi.string().required()
    });
    const result = Joi.validate(req.body, schema);
    const valid = result.error == null;
    if (!valid){
        return res.status(422).json({message:"Bad request", error:result.error.details});
    }
    if (old_password===new_password){
        return res.status(400).json({message:"Old and new password can never be similar!!"})
    }
    const user_id = req.user.id;
    try{
        const user = await db.user.findByPk(user_id, {attributes:['password', 'id']});
        const result = await bcrypt.compare(old_password, user.password);
        if (!result){
            return  res.status(500).json({message:'Your password is incorrect'})
        }
        user.password = await bcrypt.hash(new_password, 10);
        user.save();
        return res.json({message:"Password changed Successfully"});

    }catch (e) {
        throw e;
    }


};
module.exports = {
    profile,
    changePassword
};