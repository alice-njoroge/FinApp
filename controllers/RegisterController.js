const Joi = require('joi');
const passport = require('passport');
const jwt = require("jsonwebtoken");
const jwtTokens = require('../helpers/jwtTokens');

const register = async (req, res, next) => {

    const schema = Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required()

    });
    const result = Joi.validate(req.body, schema);

    const valid = result.error == null;
    if (!valid) {
        console.log("about to throw");
        throw {status: 422, message: result.error.details};
    }
    passport.authenticate('signup', async (err, user, info) => {
        try {
            if (err) {
                return next(err);
            }
            if (!user) {
                const error = new Error('There was no user');
                return next(error);
            }
            req.login(user, {session: false}, async (error) => {
                if (error) return next(error);

                //Sign the JWT token and populate the payload with the user email and id
                const token = jwtTokens.generateJWT(user.email, user.id);
                //Send back the token to the user
                return res.json({name: user.name, email: user.email, createdAt: user.createdAt, token: token});
            });
        } catch (error) {
            return next(error);
        }
    })(req, res, next);


};

module.exports = {
    register: register
};