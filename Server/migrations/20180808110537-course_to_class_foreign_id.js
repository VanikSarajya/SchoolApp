'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('courses', ['classId'],{
      type: "foreign key",
      name: "course_to_class_classId",
      references: {
        table: 'classes',
        field: 'id'
      }
    })

  },

  down: (queryInterface, Sequelize) => {
    const dropForeignKeySQL = queryInterface.QueryGenerator.dropForeignKeyQuery("courses","course_to_class_classId");
    return queryInterface.sequelize.query(dropForeignKeySQL);
  }
};
