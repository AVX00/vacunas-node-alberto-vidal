const { Schema } = require("mongoose");
const puntoVacunacionSchema = require("./puntoVacunacionSchema");

const ciudadSchema = new Schema({
  name: { type: String, required: true },
  puntosVacunacion: {
    type: [puntoVacunacionSchema],
  },
});

module.exports = ciudadSchema;
