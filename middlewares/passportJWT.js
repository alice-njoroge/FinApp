const passport = require('passport');

const passportJWT = (req,res,next) => {
    return passport.authenticate('jwt', {session: false},(err,user,info) => {
        if(err) {
            return next(err);
        }
        if(info) {
            return next(info)
        }
        if(!user){
            throw new Error('No authorized user');
        }
        req.user = user;
        next()
    })(req,res,next)
};
module.exports = passportJWT;