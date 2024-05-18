const express = require ('express');
const ThingController = require('./controllers/Thing.controller')


const app = express();

const bodyParser = express.json();

app.post('/thing', bodyParser, ThingController.createThing);
app.get('/thing/:id', ThingController.getOne)
app.get('/things',ThingController.getAllThings)
app.delete('/thing/:id', ThingController.deleteOne);
app.put('/thing/:id', bodyParser, ThingController.updateOne);

module.exports = app;