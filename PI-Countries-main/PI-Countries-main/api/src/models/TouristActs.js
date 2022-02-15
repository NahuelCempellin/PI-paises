const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('touristActs', {
      name: {
        type: DataTypes.STRING,
        unique: true,
        primaryKey: true
      },
      difficulty: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 5
        }
      },
      duration: {
        type: DataTypes.INTEGER,
      },
      season: {
        type: DataTypes.ENUM("summer", "fall", "winter", "spring"),    
      },
    },
    {
      timestamps: false,
    });
  };
