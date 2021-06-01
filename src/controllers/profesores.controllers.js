const Profesor = require("../Models/Profesor");
const jwt = require("jsonwebtoken");
exports.registrar = async (req, res) =>{
    try {
        const {correo, clave} = req.body;
        if(correo && clave){

            const nuevoProfesor = new Profesor({correo, clave});
            await nuevoProfesor.save();
            res.json({isOk:true, id:nuevoProfesor._id});

        }else {
            res.json({error: "Faltan datos mi pana "});
        }
    } catch (error) {
        res.json({error})
    }
};

exports.login = async (req, res) =>{
    try {
        const {correo, clave} = req.body;
        if(correo && clave){
            const profesor = await Profesor.findOne({correo});
            if(!profesor){
                res.json({token: null, msj:"usuario o clave incorrecta"});
            }else{
                if(profesor.clave == clave){
                    const {_id, correo}= profesor;
                    const opt = {
                        expiresIn:'1h'
                    }
                    const palabra ="palabrasecreta"
                    const token = jwt.sign({_id, correo}, palabra, opt)
                    res.json({token});
                    
                }else{
                    res.json({token: null, msj:"usuario o clave incorrecta"}); 
                }
            }

        }else {
            res.json({error: "Faltan datos mi pana "});
        }
    } catch (error) {
        res.json({error});
    }
}