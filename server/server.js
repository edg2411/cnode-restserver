require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();

const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(require('./routes/usuario'));



// mongoose.connect('mongodb://localhost:27017/cafe', (err) => {
//     if (err) throw new err;

//     console.log('base de datos online!');
// });

mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false }, (err, res) => {

    if (err) throw err;

    console.log('Base de Datos ONLINE');

});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto:', process.env.PORT);
});