const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const { home, getAll, postForFiltering, getAlert, getUnreliableNames, getRepeatedNames, getRepeatedCD, getRepeatedNpl, getRepeatedZbz } = require('./controllers/controllers')

const port = process.env.PORT || '8888';

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', home)

app.get('/all', getAll);

app.get('/cd-repetidos', getRepeatedCD);
app.get('/cd-duvidosos', );
app.get('/npl-repetidos', getRepeatedNpl);
app.get('/npl-duvidosos');
app.get('/zbz-repetidos', getRepeatedZbz);
app.get('/zbz-duvidosos');

app.get('/nomes-duvidosos', getUnreliableNames);

app.get('/nomes-repetidos', getRepeatedNames);

app.post('/filter', postForFiltering);

app.get('/alert', getAlert);

app.listen(port, ()=>console.log(`Running on port ${port}`));