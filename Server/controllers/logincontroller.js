const models = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

exports.login = function (req,res) {
    const {email,password} = req.body;
    models.admins.findOne({where : {email}})
    .then((results) => {
        if (results == null){
            res.json({
                message: "Wrong Email"
            });
        } else if (Object.keys(results).length>0){
            if(bcrypt.compareSync(password, results.password)){
                const token = jwt.sign({
                    id: results.id
                }, process.env.JWT_SECRET , {expiresIn : 3 * 60 * 60});
                res.json({
                    token
                });
            } else {
                res.json({
                    message: "Wrong Password"
                })
            }
        }
    }).catch((error) => {
        throw error;
    })
}

exports.authenticate = function (req,res) {
    const {token} = req.body;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err){
                res.json({
                error: "Failed to authenticate",
            });
            } else {
                models.admins.findOne({where: {id: decoded.id}}).then(result => {
                    res.json({
                        admin: result,
                    })
                })
            }
        });
    } else{
        res.json({error: "No token provided"});
    }
}