'use strict';
module.exports = (sequelize, DataTypes) => {
  var admins = sequelize.define('admins', {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  admins.associate = function(models) {
    // associations can be defined here
  };
  return admins;
};