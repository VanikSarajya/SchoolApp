require('dotenv').config();

const jwt = require('express-jwt');

function check(err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        return res.status(401).send('invalid token...');
    }
    next();
}

module.exports = [jwt({secret: process.env.JWT_SECRET}),check];