'use strict';
require('dotenv').config();

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('admins',[{
            email: "vaniksarajyan@gmail.com",
            password: process.env.ADMIN_PASSWORD
        }], {});
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('admins',null, {});
    }
}