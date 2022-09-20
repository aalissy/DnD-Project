const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Character extends Model {}

Character.init({
  //   unique id for each character
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  //   this is the id that connects each character to its user
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "user",
      key: "id",
    },
  },
  date_created: {}
  //   character name
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  //   character class
  class: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  //   character level
  level: {
    type: DataTypes.INTEGER,
  },
});
