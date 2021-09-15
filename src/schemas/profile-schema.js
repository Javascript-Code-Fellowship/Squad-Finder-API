'use strict';

const { User } = require('./index.js');

const profileModel = (sequelize, DataTypes) => {
  const model = sequelize.define('Profiles', {
    bio: { type: DataTypes.STRING, required: true },
    games: { type: DataTypes.ENUM('Madden', 'Fortnite', 'Minecraft', 'League of Legends'), required: true },
  });
  return model
}

module.exports = profileModel;
