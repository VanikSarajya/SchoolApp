'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('admins',[{
            email: "vaniksarajyan@gmail.com",
            password: "12345678"
        }], {});
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('admins',null, {});
    }
}