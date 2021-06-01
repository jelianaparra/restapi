const Estudiante = require("../Models/Estudiantes");
const guardarArchivo = require("../utils/guardar-archivo");
const agregarArchivo = require("../utils/guardar-archivo");

exports.obtenerEstudiantes = async (req, res) =>{
    try {
       const estudiantes = await Estudiante.find({activo:true}); 
       res.json(estudiantes);
    } catch (error) {
        res.json(error);
    }
};

exports.agregarEstudiantes = async (req, res) =>{

    if(req.files){
        
        const resp = await guardarArchivo(req.files, "expediente", "application/pdf");
        const nombreExpediente = resp.nuevoNombre;
        if(resp.isOk){
            try {
                const {nombre, correo, materias, historial } = req.body;
                console.log(nombre);
            
                if (nombre && correo) {
                    const nuevoEstudiante = new Estudiante({ nombre,correo, materias, nombreExpediente, historial});
                    await nuevoEstudiante.save();
                res.json({msj: "datos insertados correctamente", id:nuevoEstudiante._id});
                } else {
                    res.json({isOk: false, msj: "los datos son requeridos"})
                }
                } catch (error) {
                    res.json(error)  
                }
        }else{
            res.json({error: resp.error})
        }
    }else{
        res.json({error:"Debe adjuntar el expediente del estudiante en pdf"})    }
    
};

exports.actualizarEstudiantes= async(req, res) =>{
    try {
        const id = req.params.id;
        const data = req.body;
        if(id && data){
            await Estudiante.findByIdAndUpdate(id, data);
            res.json("Registro actualizado");
        }else {
            res.json({msj:"datos insuficientes"})
        }
        
    } catch (error) {
        res.json(error);
    }
};

exports.eliminarEstudiantes = async(req, res) =>{
  try {
    const id = req.params.id;
    console.log(id);
    const eliminado = await Estudiante.findOneAndUpdate(id,{activo: false})
    res.status(200).json({msj:"Dato borrado de anera satisfactoria",isOk: true});
  } catch (error) {
      res.status(500).json(error);      
  }
};
