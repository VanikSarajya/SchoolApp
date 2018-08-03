const {admins} = require('../models/index');

exports.login = function (req,res) {
    const {email,password} = req.body;
    admins.findOne({where : {email: email}})
    .then((results) => {
        if (results == null){
            res.json({
                logged: false,
                message: "Wrong email or password"
            });
        } else if (Object.keys(results).length>0){
            if(results.password === password){
                res.json({
                    logged: true,
                    message: "Success"
                });
            }
        }
    }).catch((error) => {
        throw error;
    })
}