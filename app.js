const express = require('express');
const app= express();
const port = process.env.PORT || 3000;
const authRoutes = require('./routes/auth');

require('./middlewares/auth');
require('dotenv').config();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/', authRoutes);

//Handle errors
app.use(function(err, req, res, next) {
    console.log(err);
    res.status(err.status || 500);
    res.json({ error : err });
});

app.listen(port, () => {
    console.log(`Listening to port Yay!: ${port}`);
});

