const { Schema } = require("mongoose");

const VacunaSchema = new Schema({
  nombre: { type: String, required: true },
  dosis: { type: Number, required: true },
});

module.exports = VacunaSchema;
