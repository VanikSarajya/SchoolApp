'use strict';
require('dotenv').config();
const bcrypt = require('bcrypt');
const {admins} = require('../models/index');

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('admins',[{
            email: "vaniksarajyan@gmail.com",
            password: bcrypt.hashSync(process.env.ADMIN_PASSWORD, 8),
            firstName: "Vanik",
            lastName: "Sarajyan"
        }], {});
    },
    down: (queryInterface, Sequelize) => {
        return admins.destroy({where: {email: "vaniksarajyan@gmail.com"}});
    }
}