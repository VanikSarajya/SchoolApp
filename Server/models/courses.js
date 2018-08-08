'use strict';
module.exports = (sequelize, DataTypes) => {
  var courses = sequelize.define('courses', {
    name: DataTypes.STRING,
    classId: DataTypes.INTEGER,
    teacherId: DataTypes.INTEGER,
    startingDate: DataTypes.DATEONLY,
    endingDate: DataTypes.DATEONLY,
    startingTime: DataTypes.DATE,
    enddingTime: DataTypes.DATE
  }, {timestamps:false});
  courses.associate = function(models) {
    // associations can be defined here
  };
  return courses;
};