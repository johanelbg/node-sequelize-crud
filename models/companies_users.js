const Sequilize = require("sequelize");
const db = require("../config/db");

const CompaniesUsers = db.define(
  "CompaniesUsers",
  {
    companyId: {
      type: Sequilize.INTEGER,
      allowNull: false,
      references: {
        model: "Companies",
        key: "id"
      }
    },
    userId: {
      type: Sequilize.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "id"
      }
    }
  },
  {
    timestamps: false
  }
);

module.exports = CompaniesUsers;
