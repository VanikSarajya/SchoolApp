const {classes} = require('../models/index');
const {teachers} = require('../models/index');

exports.get = function (req,res){
    classes.findAll().then(results => {
        if(results == null){
            res.json({
                message: "There are no classes"
            });  
        } else {
            res.json({
                classes: results
            });
        }
    }).catch((err) => {
        throw err;
    })
}

exports.delete = function (req,res) {
    classes.destroy({where : {id: req.body.id}}).then(
        res.json({
            message: `Class successfully deleted!`
        })
    );
}

exports.add = function (req,res) {
    const {name, teacherId} = req.body;
    classes.create({name : name, teacherId: teacherId }).then((newClass)=>
        res.json({
            message: "Class successfully added!",
            newClass
        })
    );
}

exports.edit = function (req,res) {
    const {id, name, teacherId} = req.body;
    classes.update(
        {name, teacherId},
        {where: {id}}
    ).then(
        res.json({
            message: "Class successfully updated!"
        }) 
    );
}
