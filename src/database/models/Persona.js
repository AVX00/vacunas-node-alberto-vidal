const { model } = require("mongoose");
const PersonaSchema = require("../schemas/personaSchema");

const Persona = model("persona", PersonaSchema, "personas");

module.exports = Persona;
