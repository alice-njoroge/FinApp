const jwt = require('jsonwebtoken');
require('dotenv').config();


const generateJWT = (email, user_id)=>{
    return jwt.sign({
        email:email,
        id:user_id
    },process.env.SECRET_KEY, {expiresIn:process.env.TOKEN_LIFE});
};

module.exports ={
    generateJWT:generateJWT
};