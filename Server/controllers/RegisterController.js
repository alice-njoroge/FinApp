const Joi = require('joi');
const passportLogin = require('../helpers/passportLogin');
const passwordComplexity = require('joi-password-complexity');



const register =  (req, res, next) => {

    const schema = Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required()

    });
    const result = Joi.validate(req.body, schema);

    const valid = result.error == null;
    if (!valid) {
        throw {status: 422, message: result.error.details};
    }
    const newPass = passwordComplexity().validate(req.body.password);
    if (newPass.error) {
        throw {status: 422, message: "password is not strong ", error : newPass.error};
    }
    return passportLogin('signup', req, res, next);

};

module.exports = register;