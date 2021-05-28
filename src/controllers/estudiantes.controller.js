
exports.obtenerEstudiantes = (req, res) =>{
    [
    {
        "nombre" :"luis araujo",
        "correo": "luis@gmail.com"
    },
    {
        "nombre" :"pedro araujo",
        "correo": "pedro@gmail.com"
    },
]
    res.json(estudiantes);
}

exports.agregarEstudiantes = (req, res) =>{
    const {nombre, correo } = req.body;
    res.json("datos recibidos");
}

exports.actualizarEstudiantes= (req, res) =>{
    const id = req.params.id;
    console.log(id );
    res.json("datos actualizados");
}

exports.eliminarEstudiantes = (req, res) =>{
    const id = req.params.id;
    console.log(id);
    res.json("id recibida para eliminar ");
}
