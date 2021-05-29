const { Router } = require("express");
const crtMaterias = require("../controllers/materias.controller");

const routeMaterias = Router();

routeMaterias.get("/:idEst", crtMaterias.obtenerMaterias);

routeMaterias.post("/:idEst", crtMaterias.agregarMaterias);

routeMaterias.delete("/:idEst/:idMat", crtMaterias.eliminarMateria);

routeMaterias.put("/:idEst/:idMat", crtMaterias.actualizarMateria);


module.exports= routeMaterias;