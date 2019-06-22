const Sequilize = require("sequelize");
const db = require("../config/db");

const CompaniesUsers = db.define(
  "CompaniesUsers",
  {
    company_id: {
      type: Sequilize.INTEGER,
      allowNull: false,
      references: {
        model: "Companies",
        key: "id"
      }
    },
    user_id: {
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
