require("dotenv").config();
const connectDB = require("./database");
const Persona = require("./database/models/Persona");

(async () => {
  await connectDB();
  await Persona.create({
    dni: "uathunet",
    centro: {
      nombre: "uhnoethu",
      puntoVacunacion: {
        coordenadas: [32, 42],
        direccion: "huathuna",
      },
    },
    vacuna: {
      nombre: "nutheonutho",
      dosis: 1,
    },
  });
})();
