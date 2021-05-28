const express = require('express');
const routerEstudiantes = require("./routes/estudiantes.routes");
const app = express();


//settings
app.set("name","restapi");
app.set("port", process.env.port || 3000);

app.use( express.json() );

//Calling the Routes

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api/estudiantes", routerEstudiantes);


module.exports = app;
