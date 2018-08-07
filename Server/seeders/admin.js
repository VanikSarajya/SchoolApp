'use strict';
require('dotenv').config();
const {admins} = require('../models/index');

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('admins',[{
            email: "vaniksarajyan@gmail.com",
            password: process.env.ADMIN_PASSWORD
        }], {});
    },
    down: (queryInterface, Sequelize) => {
        return admins.destroy({where: {email: "vaniksarajyan@gmail.com"}});
    }
}