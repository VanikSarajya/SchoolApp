'use strict';
module.exports = (sequelize, DataTypes) => {
  var courses = sequelize.define('courses', {
    name: DataTypes.STRING,
    classId: DataTypes.INTEGER,
    teacherId: DataTypes.INTEGER,
    startingDate: DataTypes.DATEONLY,
    endingDate: DataTypes.DATEONLY,
    startingTime: DataTypes.TIME,
    enddingTime: DataTypes.TIME
  }, {timestamps:false});
  courses.associate = function(models) {
    // associations can be defined here
    courses.belongsTo(models.teachers);
    courses.belongsTo(models.classes);
  };
  return courses;
};