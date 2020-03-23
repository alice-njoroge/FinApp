const Joi = require('joi');
const passport = require('passport');
const jwt = require("jsonwebtoken");

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
            if(err) {
                return next(err);
            }
            if (!user) {
                const error = new Error('There was no user');
                return next(error);
            }
            req.login(user, {session: false}, async (error) => {
                if (error) return next(error);
                //We don't want to store the sensitive information such as the
                //user password in the token so we pick only the email and id
                const body = {id: user.id, email: user.email};
                //Sign the JWT token and populate the payload with the user email and id
                const token = jwt.sign({user: body}, 'top_secret');
                //Send back the token to the user
                return res.json({token});
            });
        } catch (error) {
            return next(error);
        }
    })(req, res, next);

    res.json({
        message: "SignUp successfully",
        user: req.user
    })

};

module.exports = {
    register: register
};