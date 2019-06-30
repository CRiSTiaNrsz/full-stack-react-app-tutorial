const path =require ('path');
const express= require('express');
const bodyParser = require('body-parser'); //interpretacion de datos por https varios

var db= require('./database');

const ENV=process.env.NODE_ENV;
const PORT=process.env.PORT || 5000; //numerode puerto que el server express escucha

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/cities', require('./api/cities'));

app.listen(PORT, () => {
    console.log(`Server listening on port gaa ${PORT}!`);
});


db.query('SELECT NOW()', (err, res) => {
    if (err.error)
      return console.log(err.error);
    console.log(`PostgreSQL connected: ${res[0].now}.`);
});

module.exports = app;
