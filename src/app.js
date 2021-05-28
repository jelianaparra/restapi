const express = require('express');
const morgan = require("morgan");
const routerEstudiantes = require("./routes/estudiantes.routes");
const app = express();

//settings
app.set("name","restapi");
app.set("port", process.env.port || 3000);

//middlewares
app.use( express.json() );
app.use(morgan("dev"));

//Calling the Routes
app.use(express.static("public"));
app.use("/api/estudiantes", routerEstudiantes);


module.exports = app;
