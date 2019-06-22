const Sequilize = require("sequelize");
const db = require("../config/db");

const Users = db.define(
  "Users",
  {
    id: {
      type: Sequilize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
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

Users.associate = models => {
  Users.belongsToMany(models.Companies, {
    through: "CompaniesUsers",
    as: "Companies",
    foreignKey: "userId"
  });
};

module.exports = Users;
