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
      unique: true,
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
    as: "users",
    foreignKey: "userId"
  });
};

module.exports = Companies;
