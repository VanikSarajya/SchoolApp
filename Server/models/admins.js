'use strict';
module.exports = (sequelize, DataTypes) => {
  var admins = sequelize.define('admins', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  }, {timestamps:false});
  admins.associate = function(models) {
    // associations can be defined here
  };
  return admins;
};