const User = require("./User");

const Project = require("./Character");

const Character = require("./Character");


User.hasMany(Character, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Character.belongsTo(User, {
  foreignKey: "user_id",
});


module.exports = { User, Character };

module.exports = { User, Project };

