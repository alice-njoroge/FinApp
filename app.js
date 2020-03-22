const express = require('express');
const app= express();
const port = process.env.PORT || 3000;
const registerRoutes = require('./routes/auth');

require('./middlewares/auth');
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/', registerRoutes);

app.listen(port, () => {
    console.log(`Listening to port Yay!: ${port}`);
});

