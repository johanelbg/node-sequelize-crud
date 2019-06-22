const Sequilize = require("sequelize");
const db = require("../config/db");

const companies = db.define(
  "companies",
  {
    id: {
      type: Sequilize.UUID,
      primaryKey: true
    },
    name: {
      type: Sequilize.STRING
    }
  },
  {
    timestamps: false
  }
);

module.exports = companies;
