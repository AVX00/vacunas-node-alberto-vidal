const { model, Schema } = require("mongoose");

// Una persona tiene que tener DNI, centro en el que se ha vacunado, vacuna que se ha administrado, y un array de dosis, que almacenará una o dos fechas.

//  {
//   "nombre": "Sant Isidor- Centre vacunal CAPSBE",
//   "localizacion": {
//     "coordenadas": [41.3853035, 2.1274393],
//     "direccion": "Carrer del Comte Borrell, 305"
//   }

const PersonaSchema = new Schema({
  dni: { type: String, required: true, unique: true },
  centro: {
    nombre: { type: String, required: true, unique: true },
    localizacion: {
      coordenadas: {
        type: [Number],
        required: true,
        unique: true,
        length: 2,
      },
      direccion: { type: String, required: true, unique: true },
    },
  },
  vacuna: {
    nombre: { type: String, required: true },
    dosis: { type: Number, required: true },
  },
});

const Persona = model("persona", PersonaSchema, "personas");

module.exports = Persona;
