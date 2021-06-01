const { Router } = require("express");

const crtHistorial = require("../controllers/historial.controller");

const routerHistorial = Router();

routerHistorial.get("/:idEst", crtHistorial.obtenerHistorial);

routerHistorial.post("/:Est",crtHistorial.agregarHistorial)

routerHistorial.delete("/:idEst/:idHis", crtHistorial.eliminarHistorial);

routerHistorial.put("/:idEst/:idHis", crtHistorial.actualizarHistorial);

module.exports = routerHistorial;