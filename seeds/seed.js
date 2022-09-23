const sequelize = require("../config/connection");
const { User, Character } = require("../models");

const userData = require("./userData.json");
const characterData = require("./characterData.json");

const seedDatabase = async () => {
  await sequelize.syn({ force: true });
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const character of characterData) {
    await Character.create({
      ...character,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};
seedDatabase();
