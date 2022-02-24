/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
const chalk = require("chalk");
const debug = require("debug")("vacunas:database");
const { default: mongoose } = require("mongoose");

const connectDB = async () => {
  mongoose.set("toJSON", {
    virtuals: true,
    transform: (doc, ret) => {
      delete ret._id;
      delete ret.__v;
    },
  });
  try {
    await mongoose.connect(process.env.MONGO_URI);
    debug(chalk.bgGreen.black("database connected"));
  } catch (error) {
    debug(chalk.red(error.message));
  }
};

module.exports = connectDB;
