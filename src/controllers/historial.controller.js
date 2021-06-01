const Estudiante = require("../Models/Estudiantes");

exports.obtenerHistorial =async (req, res) => {
    try {
        if(req.params.idEst){
            const idEst = req.params.idEst;
            const estudiante = await Estudiante.findById(idEst);
            res.json(estudiante.historial);
        }else{
            res.status(400).json({error:"Debe enciar el id del estudiante"})
        }
    } catch (error) {
        res.status(500).json({error});
        
    }
}

exports.agregarHistorial = async(req, res) =>{
    try {
        if (req.params.idEst && req.body){

            const idEst = req.params.idEst;
            const historial = req.body;
            const estudiante = await Estudiante.findById(idEst);
            estudiante.historial.push(historial);
            await estudiante.save();
            res.json({isOk:true});
        }else{
            res.status(400).json({error:"datos insuficientes"});
        }
    } catch (error) {
        res.status(500).json({error});      
    }
};

exports.eliminarHistorial = async (req, res)=>{
    try {
        if(req.params.idEst && req.params.idHis){
            const idEst = req.params.idEst;
            const idHis = req.params.idHis;
            const estudiante = await Estudiante.findById(idEst);
            
            for (let index = 0; index < estudiante.historial.length; index++) {
                if (estudiante.historial[index]._id == idHis) {
                    estudiante.historial.splice(index, 1);
                } 
            }

            await estudiante.save();
            res.json({isOk:true});

        }else{
            res.status(400).json({error:"Debe incluir el ide del estudiante e historial que desea eliminar"})
        }
    } catch (error) {
        res.status(500).json({error})
    }
};

exports.actualizarHistorial= async(req, res) => {
    try {
        if(req.params.idEst && req.params.idHis && req.body){
            const idEst = req.params.idEst;
            const idHis = req.params.idHis;
            const data = req.body;
            const estudiante = await Estudiante.findById(idEst);

            for (let i=0; i < estudiante.historial.length ; i++){
                if(estudiante.actualizarHistorial[i]._id == idHis){
                   Object.assign(estudiante.historial[i], data);
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