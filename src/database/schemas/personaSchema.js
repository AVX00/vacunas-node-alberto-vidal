const { Schema } = require("mongoose");
const puntoVacunacionSchema = require("./puntoVacunacionSchema");
const VacunaSchema = require("./VacunaSchema");

const PersonaSchema = new Schema({
  dni: { type: String, required: true, unique: true },
  centro: {
    nombre: { type: String, required: true, unique: true },
    puntoVacunacion: {
      type: puntoVacunacionSchema,
      required: true,
    },
  },
  vacuna: {
    type: VacunaSchema,
    required: true,
  },
});

module.exports = PersonaSchema;
