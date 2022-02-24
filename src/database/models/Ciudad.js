const { model } = require("mongoose");
const ciudadSchema = require("../schemas/ciudadSchema");

const Ciudad = model("ciudad", ciudadSchema, "ciudades");

module.exports = Ciudad;
