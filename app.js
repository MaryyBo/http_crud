const express = require('express');
const ThingController = require('./controllers/Thing.controller')
const { basicErrorHandler } = require('./errorHandler')
const { validateThing } = require('./utils/vslidationThings')


const app = express();

const bodyParser = express.json();

app.use(bodyParser); //підключили на всі роути

app.post('/thing', validateThing, ThingController.createThing);
app.get('/thing/:id', ThingController.getOne);
app.get('/things', ThingController.getAllThings);
app.delete('/thing/:id', ThingController.deleteOne);
app.put('/thing/:id', validateThing, ThingController.updateOne);

//Обробник помилок пишемо ПІСЛЯ роутів

app.use(basicErrorHandler);


module.exports = app;