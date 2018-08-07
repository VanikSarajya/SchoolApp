'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('students', ['classId'],{
      type: "foreign key",
      name: "student_to_class_classId",
      references: {
        table: 'classes',
        field: 'id'
      }
    })

  },

  down: (queryInterface, Sequelize) => {
    const dropForeignKeySQL = queryInterface.QueryGenerator.dropForeignKeyQuery("students","student_to_class_classId");
    return queryInterface.sequelize.query(dropForeignKeySQL);
  }
};
