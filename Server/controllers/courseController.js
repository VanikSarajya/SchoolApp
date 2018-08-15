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
                message: "There are no Courses"
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

exports.getOne = function(req,res){
    models.courses.findById(req.params.id, {include: [{model: models.classes, required:true}, {model: models.teachers,required:true}]}).then(currentCourse=>{
        if(currentCourse == null){
            res.json({
                message: "There is no Course with this ID"
            })
        } else {
            res.json({
                currentCourse
            })
        }
    }).catch(err => {
        throw err;
    })
}

exports.edit = function(req,res) {
    const {name, classId, teacherId, startingDate, endingDate, startingTime, enddingTime} = req.body;
    models.courses.update({name, classId, teacherId, startingDate, endingDate, startingTime, enddingTime},
        {where: {id: req.params.id}}).then(
            res.json({
                message: "Course successfully updated"
            })
        ).catch(err => {
            throw err
        })
}

exports.add = function (req,res) {
    const {name, classId, teacherId, startingDate, endingDate, startingTime, enddingTime} = req.body;
    models.courses.create({name, classId, teacherId, startingDate, endingDate, startingTime, enddingTime}).then(()=>
        res.json({
            message: "Course successfully added!",
        })
    );
}

exports.delete = function (req,res) {
    models.courses.destroy({where : {id: req.params.id}}).then(
        res.json({
            message: `Course successfully deleted!`
        })
    );
}