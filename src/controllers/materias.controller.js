const Estudiante = require("../Models/Estudiantes");

exports.obtenerMaterias = async (req, res )=> {
     try {
         if(req.params.idEst){
             const idEst = req.params.idEst;
             const estudiante = await Estudiante.findById(idEst);
             res.json(estudiante.materias);
         }else {
             res.json({error:"Debe enviar el id del estudiante"})
         }
     } catch (error) {
         res.status(500).json({error});         
     }
};

exports.agregarMaterias = async (req, res) =>{
    try {
        if(req.params.idEst && req.body){
            const idEst = req.params.idEst;
            const materia = req.body;
            const estudiante = await Estudiante.findById(idEst);
            estudiante.materias.push(materia);
            await estudiante.save();
            res.json({isOk:true});

        }else {
            res.status(400).json({error: "Datos insuficientes"});
        }
    } catch (error) {
        res.status(500).json({error});
    }
};

exports.eliminarMateria = async(req, res)=>{
    try {
        if(req.params.idEst && req.params.idMat){
            const idEst = req.params.idEst;
            const idMat = req.params.idMat;
            const estudiante = await Estudiante.findById(idEst);

        for (let i=0; i < estudiante.materias.length ; i++) { 
           if(estudiante.materias[i]._id == idMat){
              estudiante.materias.splice(i , 1);
           }
            
        }
        await estudiante.save();
        res.json({isOk:true});

    }else{
        res.status(400).json({error:"Debe incluir el id del estudiante y el id de la materia a eliminar"})
    }
    } catch (error) {
        res.status(500).json({error})
    }
};

exports.actualizarMateria= async(req, res) => {
    try {
        if(req.params.idEst && req.params.idMat && req.body){
            const idEst = req.params.idEst;
            const idMat = req.params.idMat;
            const data = req.body;
            const estudiante = await Estudiante.findById(idEst);

            for (let i=0; i < estudiante.materias.length ; i++){
                if(estudiante.materias[i]._id == idMat){
                   Object.assign(estudiante.materias[i], data);
                }
            }
            await estudiante.save();
            res.json({isOk:true});

            }else{
            res.status(400).json({error:"Debe enviar todos los datos"})
        }
     } catch (error) {
        res.status(500).json({error:error, isOk:flase})
     }
}