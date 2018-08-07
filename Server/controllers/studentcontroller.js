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

exports.add = function (req,res) {
    const {firstName, lastName, classId} = req.body;
    students.create({firstName, lastName, classId }).then((newStudent)=>
        res.json({
            message: "Student successfully added!",
            newStudent
        })
    );
}

exports.delete = function (req,res) {
    students.destroy({where : {id: req.body.id}}).then(
        res.json({
            message: `Student successfully deleted!`
        })
    );
}

exports.edit = function (req,res) {
    const {id, firstName, lastName, classId} = req.body;
    students.update(
        {firstName, lastName, classId},
        {where: {id}}
    ).then(
        res.json({
            message: "Class successfully updated!"
        }) 
    );
}
