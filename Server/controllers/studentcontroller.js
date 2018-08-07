const {students} = require('../models/index');

exports.get = function (req,res){
    students.findAll().then(results => {
        if(results == null){
            res.json({
                message: "There are no students"
            });  
        } else {
            res.json({
                students: results
            });
        }
    }).catch((err) => {
        throw err;
    })
}