'use strict';
module.exports = (sequelize, DataTypes) => {
  var classes = sequelize.define('classes', {
    name: DataTypes.STRING,
    teacherId: DataTypes.INTEGER
  }, {timestamps: false});
  classes.associate = function(models) {
    classes.belongsTo(models.teachers,{foreignKey:'teacherId', targetKey:'id'});
  };
  return classes;
};