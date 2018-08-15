const models = require('../models');


exports.get = function (req,res){
    models.students.findAll({
        include: [{
            model: models.classes,
            required: true
        }]
    }).then(results => {
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

exports.getOne = function(req,res){
    models.students.findById(req.params.id,{include: [{model:models.classes, required:true}]}).then((student) =>{
        if(student == null){
            res.json({
                message: "There is no student with this ID"
            })
        } else {
            res.json({
                student
            })
        }
    }).catch((err) => {
        throw err;
    })
}

exports.add = function (req,res) {
    const {firstName, lastName, classId} = req.body;
    models.students.create({firstName, lastName, classId }).then(()=>
        res.json({
            message: "Student successfully added!",
        })
    );
}

exports.delete = function (req,res) {
    models.students.destroy({where : {id: req.params.id}}).then(
        res.json({
            message: `Student successfully deleted!`
        })
    );
}

exports.edit = function (req,res) {
    const { firstName, lastName, classId} = req.body;
    models.students.update(
        {firstName, lastName, classId},
        {where: {id:req.params.id}}
    ).then(
        res.json({
            message: "Class successfully updated!"
        }) 
    );
}