const mongoose = require('mongoose');

const {Schema} = mongoose;

const JefeSchema = new Schema({

    nombre: String,
    correo: String,
    contrasena: String
}, {
    collection : 'jefe'
}
);

module.exports = mongoose.model('jefe', JefeSchema)