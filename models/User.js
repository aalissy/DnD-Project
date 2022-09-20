const { Model, Datatypes } = require("sequelize");
// require bcrypt here maybe? Kyle?
const sequelize = require("../config/connection");

// modelling this after the unit 14 miniproject, as such ill be commenting places where we might want to add encryption/login checks
class User extends Model {
  // checkPassword(loginPw) {
  //     return bcrypt.compareSync(loginPw, this.password);
  //   }
}

User.init(
  {
    id: {
      type: Datatypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: Datatypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: Datatypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: Datatypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },

  // {
  //   hooks: {
  //     beforeCreate: async (newUserData) => {
  //       newUserData.password = await bcrypt.hash(newUserData.password, 10);
  //       return newUserData;
  //     },
  //     beforeUpdate: async (updatedUserData) => {
  //       updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
  //       return updatedUserData;
  //     },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }

  //   },
  //   sequelize,
  //   timestamps: false,
  //   freezeTableName: true,
  //   underscored: true,
  //   modelName: 'user',
  // }
);

module.exports = User;
