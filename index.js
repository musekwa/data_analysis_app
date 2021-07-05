const express = require('express');
const { home, getAll, getByProvince, getByDistrict } = require('./controllers/farmersController')

const port = process.env.PORT || '8888';

const app = express();

app.get('/', home)

app.get('/provinces', getAll);

app.get('/provinces/:province', getByProvince);

app.get('/provinces/:district', getByDistrict);


app.listen(port, ()=>console.log(`Running on port ${port}`));