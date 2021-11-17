const mongoose = require('mongoose');
const inmuebleSchema = new mongoose.Schema({
    tipo: {
        type: String
    },
    descripcion: {
        type: String
    },
    numeroHabitaciones: {
        type: String
    },
    numeroBanos: {
        type: String
    },
    precio: {
        type: String
    },
    imagen: {
        type: String
    },
    id_ubicacion: {
        type: moongose.Schema.ObjectId, ref: "ubicacion"
    }
});

module.exports = mongoose.model('inmueble', inmuebleSchema, 'inmuebles');