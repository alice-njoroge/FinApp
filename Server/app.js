const express = require('express');
const app = express();
const port = 3002;
const passport = require('passport');
const authRoutes = require('./routes/auth');
const incomeSourceRoutes = require('./routes/incomeSource');
const userRoutes = require('./routes/users');

require('./middlewares/auth');
require('dotenv').config();
const passportJWT = require('./middlewares/passportJWT');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(passport.initialize());

//routes
app.use('/', authRoutes);
app.use('/income-sources', passportJWT, incomeSourceRoutes);
app.use('/users', passportJWT, userRoutes);

//Handle errors
app.use(function (err, req, res, next) {
    console.log(err);
    res.status(err.status || 500);
    res.json({error: err.message});
});

app.listen(port, () => {
    console.log(`Listening to port Yay!: ${port}`);
});

