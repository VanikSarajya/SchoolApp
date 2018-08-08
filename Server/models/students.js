'use strict';
module.exports = (sequelize, DataTypes) => {
  var students = sequelize.define('students', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    classId: DataTypes.INTEGER
  }, {timestamps:false});
  students.associate = function(models) {
    // associations can be defined here
    students.belongsTo(models.classes, {foreignKey: "classId", targetKey: "id"});
  };
  return students;
};