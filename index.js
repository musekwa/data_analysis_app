const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const { home, getAll, getByProvince, getByDistrict } = require('./controllers/controllers')

const port = process.env.PORT || '8888';

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', home)

app.get('/all', getAll);

app.get('/provinces', getByProvince);

app.get('/districts', getByDistrict);


app.listen(port, ()=>console.log(`Running on port ${port}`));