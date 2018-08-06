'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('classes', ['teacherId'],{
      type: "foreign key",
      name: "Class_to_Teacher_teacherId",
      references: {
        table: 'teachers',
        field: 'id',
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    const dropForeignKeySQL = queryInterface.QueryGenerator.dropForeignKeyQuery("classes","Class_to_Teacher_teacherId");
    return queryInterface.sequelize.query(dropForeignKeySQL);
  }
};
