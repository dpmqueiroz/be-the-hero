const express = require('express');
const routes = express.Router();
const ongController = require('./controllers/ongController')
const incidentsController = require('./controllers/incidentControler')
const profileController = require('./controllers/ProfileController')
const sessionController = require('./controllers/SessionController')

routes.post('/session', sessionController.create)

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/profile', profileController.index);

routes.post('/incidents', incidentsController.create);
routes.get('/incidents', incidentsController.index);
routes.delete('/incidents/:id', incidentsController.delete);

module.exports = routes;