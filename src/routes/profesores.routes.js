const { Router } = require('express')
const ctrlProfesor = require('../controllers/profesores.controllers')
const routerProfesor = Router();

routerProfesor.post('/signup', ctrlProfesor.signup);

routerProfesor.post('/login', ctrlProfesor.login);

module.exports =routerProfesor;