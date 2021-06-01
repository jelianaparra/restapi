const express = require('express');
const morgan = require("morgan");
const routerEstudiantes = require("./routes/estudiantes.routes");
const routeMaterias = require("./routes/materias.routes");
const routerHistorial = require("./routes/historial.routes");
const routerProfesores= require("./routes/profesores.routes");
const fileupload = require ("express-fileupload");
const app = express();


app.set("port", process.env.port || 3000);

//middlewares
app.use( express.json() );
app.use(morgan("dev"));
app.use(fileupload({
    createParentPath: true
}))

//Calling the Routes
app.use(express.static("public"));
app.use("/api/estudiantes", routerEstudiantes);
app.use("/api/materias", routeMaterias);
app.use("/api/historial/", routerHistorial);
app.use("/api/profesores", routerProfesores);
module.exports = app;
