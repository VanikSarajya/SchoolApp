const {teachers} = require('../models/index');

exports.get = function (req,res){
    teachers.findAll().then(results => {
        if(results == null){
            res.json({
                message: "There are no teachers"
            });  
        } else {
            res.json({
                teachers: results
            });
        }
    }).catch((err) => {
        throw err;
    })
}

exports.add = function (req,res) {
    const {firstName,lastName} = req.body;
    teachers.create({firstName : firstName, lastName: lastName }).then((newTeacher)=>
        res.json({
            message: "Teacher successfully added!",
            newTeacher
        })
    );
}

exports.edit = function (req,res) {
    const {id, firstName, lastName} = req.body;
    teachers.update(
        {firstName: firstName, lastName:lastName},
        {where: {id:id}}
    ).then(
        res.json({
            message: "Teacher successfully updated!"
        })
    );
}

exports.delete = function (req,res) {
    teachers.destroy({where : {id: req.body.id}}).then(
        res.json({
            message: `Teacher successfully deleted!`
        })
    );
}