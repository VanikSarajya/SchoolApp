'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('courses', ['teacherId'],{
      type: "foreign key",
      name: "course_to_teacher_teacherId",
      references: {
        table: 'teachers',
        field: 'id',
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    const dropForeignKeySQL = queryInterface.QueryGenerator.dropForeignKeyQuery("courses","course_to_teacher_teacherId");
    return queryInterface.sequelize.query(dropForeignKeySQL);
  }
};

