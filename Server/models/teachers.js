'use strict';
module.exports = (sequelize, DataTypes) => {
  var teachers = sequelize.define('teachers', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  }, {timestamps:false});
  teachers.associate = function(models) {
    // associations can be defined here
  };
  return teachers;
};