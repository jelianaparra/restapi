const Profesor = require("../Models/Profesor");
const jwt = require("jsonwebtoken");

const autorizarProfesor = async(req, res, next) =>{
    const strToken = req.headers.authorization;

    if(!strToken){
        return res.json({msj:"no se encontro el token pana"});
        }
    try {

    const token = strToken.split(" ")[1];
    const palabra ="palabrasecreta";
    const llave = jwt.verify(token, palabra);
    const profesor = await Profesor.findById(llave._id);
        
    if(!profesor){
        return res.json({msj:"no se encontro el usuario"});
    }
    } catch (error) {   
        return res.json({error});
    }
    next();
};

module.exports = autorizarProfesor;
