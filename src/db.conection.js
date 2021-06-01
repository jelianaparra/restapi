const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const conexionDB = async() =>{
     try{
        const DB = await mongoose.connect('mongodb://localhost:27017/test-estudiantes', {useNewUrlParser: true, useUnifiedTopology: true});
        console.log("conexion perfecta", DB.connection.name);
     }catch (error){
         console.log(error);
     }
}
module.exports = conexionDB;