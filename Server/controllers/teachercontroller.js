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

exports.getOne = function (req,res){
    teachers.findById(req.params.id).then((teacher)=>{
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
    teachers.create({firstName, lastName }).then(()=>
        res.json({
            message: "Teacher successfully added!",
        }).catch((err) => {
            throw err;
        })
    );
}

exports.edit = function (req,res) {
    const { firstName, lastName} = req.body;
    const {id} = req.params;
    teachers.update(
        {firstName, lastName},
        {where: {id}}
    ).then(
        res.json({
            message: "Teacher successfully updated!"
        })
    );
}

exports.delete = function (req,res) {
    teachers.destroy({where : {id: req.params.id}}).then(
        res.json({
            message: `Teacher successfully deleted!`
        })
    );
}