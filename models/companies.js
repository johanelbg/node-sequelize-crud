const Sequilize = require("sequelize");
const db = require("../config/db");

const Companies = db.define(
  "Companies",
  {
    id: {
      type: Sequilize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    text: {
      type: Sequilize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  },
  {
    timestamps: false
  }
);

Companies.associate = models => {
  Companies.belongsToMany(models.Users, {
    through: "CompaniesUsers",
    as: "Users",
    foreignKey: "companyId"
  });
};

module.exports = Companies;
