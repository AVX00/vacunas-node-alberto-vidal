const { Schema } = require("mongoose");
const VacunaSchema = require("./VacunaSchema");

const puntoVacunacionSchema = new Schema({
  coordenadas: {
    type: [Number],
    required: true,
    unique: true,
    length: 2,
  },
  direccion: { type: String, required: true, unique: true },
  vacunas: {
    type: [VacunaSchema],
  },
});

module.exports = puntoVacunacionSchema;
