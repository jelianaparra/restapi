const {Schema, model } = require("mongoose");

const ProfesorSchema = new Schema ({

    correo: {
        require: true,
        unique: true,
        type: String
    },
    clave:{
        required: true,
        type: String
    }
});

module.exports = model("Profesor", ProfesorSchema);