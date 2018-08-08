const {courses} = require('../models/index');

exports.get = function (req,res){
    courses.findAll().then(results => {
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