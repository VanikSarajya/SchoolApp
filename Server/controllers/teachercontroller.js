const models = require('../models');

exports.get = function (req,res){
    models.teachers.findAll().then(results => {
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

exports.getOne = function (req,res){
    models.teachers.findById(req.params.id).then((teacher)=>{
        if(teacher == null){
            res.json({
                message: "There is no teacher with this Id"
            })  
        } else {
            res.json({
                teacher
            })
        }
    }).catch((err)=> {
        throw err;
    })
}

exports.add = function (req,res) {
    const {firstName,lastName} = req.body;
    models.teachers.create({firstName, lastName }).then(()=>
        res.json({
            message: "Teacher successfully added!",
        })
    );
}

exports.edit = function (req,res) {
    const { firstName, lastName} = req.body;
    const {id} = req.params;
    models.teachers.update(
        {firstName, lastName},
        {where: {id}}
    ).then(
        res.json({
            message: "Teacher successfully updated!"
        })
    );
}

exports.delete = function (req,res) {
    models.teachers.destroy({where : {id: req.params.id}}).then(
        res.json({
            message: `Teacher successfully deleted!`
        })
    );
}