const {Router}= require("express");
const ctrEst = require("../controllers/estudiantes.controller");
const routerEstudiantes = Router();


routerEstudiantes.get('/', ctrEst.obtenerEstudiantes );

routerEstudiantes.post('/', ctrEst.agregarEstudiantes );

routerEstudiantes.put('/:id',ctrEst.actualizarEstudiantes);

routerEstudiantes.delete('/:id',ctrEst.eliminarEstudiantes );

module.exports = routerEstudiantes;