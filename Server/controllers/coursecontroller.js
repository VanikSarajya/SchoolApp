const models = require('../models');

exports.get = function (req,res){
    models.courses.findAll({
        include: [{
            model: models.teachers,
            required: true
        }, {
            model: models.classes,
            required: true
        }]
    }).then(results => {
        if(results == null){
            res.json({
                message: "There are Courses"
            });  
        } else {
            res.json({
                courses: results
            });
        }
    }).catch((err) => {
        throw err;
    })
}