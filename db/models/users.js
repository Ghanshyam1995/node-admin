'use strict';
module.exports = function (sequelize, DataTypes) {
  var users = sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    dob: DataTypes.DATE
  }, {
      underscored: true,
      classMethods: {
        associate: function (models) {
          // associations can be defined here
        }
      }
    });
  return users;
};