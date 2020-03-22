const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models').users;
const bcrypt = require('bcrypt');

//Create a passport middleware to handle user registration
passport.use('signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async ( req, email, password, done) => {
    try {
        const hash = bcrypt.hashSync(password, 10);

        //Save the information provided by the user to the the database
        const user = await User.create({
            email: email,
            name:req.body.name,
            password: hash
        });
        //Send the user information to the next middleware
        return done(null, user);
    } catch (error) {
       return done(error);
    }
}));
//Create a passport middleware to handle User login
passport.use('login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    try {
        //Find the user associated with the email provided by the user
        const user = await User.findOne({
            where: {
                email: email
            }
        });
        if (!user) {
            //If the user isn't found in the database, return a message
            return done(null, false, {message: 'User not found'});
        }
            //Validate password and make sure it matches with the corresponding hash stored in the database
            //If the passwords match, it returns a value of true.
            const validate =  await bcrypt.compare(password, user.password);
            if (!validate) {
                return done(null, false, {message: 'Wrong Password'});
            }
            //Send the user information to the next middleware
            return done(null, user, {message: 'Logged in Successfully'});
        }
    catch
        (error)
        {
            return done(error);
        }
    }
));