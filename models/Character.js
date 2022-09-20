const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Character extends Model {}

Character.init(
  {
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
    //   date....... created
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: dataTypes.NOW,
    },
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
      allowNull: true,
    },
    background: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    race: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    alignment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    experience_points: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    strength: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dexterity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    constitution: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    intelligence: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    wisdom: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    charisma: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    //   saves
    strength_save: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dexterity_save: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    constitution_save: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    intelligence_save: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    wisdom_save: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    charisma_save: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    //   skills
    acrobatics: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    animal_handling: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    arcana: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    athletics: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    deception: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    history: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    insight: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    intimidation: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    investigation: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    medicine: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    nature: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    perception: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    performance: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    persuasion: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    religion: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    sleight_of_hand: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    stealth: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    survival: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    // misc character values (hp, ac, prof, insp, init, speed)
    inspiration: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    proficiency_bonus: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ac: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    initiative: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    hp_max: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    hp_current: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    hit_dice: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    //   death saves
    ds_success: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ds_failure: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "character",
  }
);
