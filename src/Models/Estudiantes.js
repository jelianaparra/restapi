const { Schema, model } = require("mongoose");

const EstudianteSchema = new Schema({
    nombre: {
        type: String,
        require: true 
    },    
    correo: {
        type: String,
        require: true
    },
    activo:{
        type: Boolean,
        default:true
    },
    nombreExpediente:{
        type:String,
        required:true
    },
    materias:[
        {  
            nota: Number,
            nombre: String,
            comentario: String
        }
    ]
});

module.exports = model ("Estudiante", EstudianteSchema );