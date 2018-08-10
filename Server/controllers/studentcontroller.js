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

exports.add = function (req,res) {
    const {firstName, lastName, classId} = req.body;
    models.students.create({firstName, lastName, classId }).then((newStudent)=>
        res.json({
            message: "Student successfully added!",
            newStudent
        })
    );
}

exports.delete = function (req,res) {
    models.students.destroy({where : {id: req.body.id}}).then(
        res.json({
            message: `Student successfully deleted!`
        })
    );
}

exports.edit = function (req,res) {
    const {id, firstName, lastName, classId} = req.body;
    models.students.update(
        {firstName, lastName, classId},
        {where: {id}}
    ).then(
        res.json({
            message: "Class successfully updated!"
        }) 
    );
}
