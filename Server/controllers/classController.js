const models = require('../models');

exports.get = function (req,res){
    models.classes.findAll({
        include: [{
            model: models.teachers,
            required: true
        }],
        order: [
            ['name', 'DESC']
        ]
    }).then(results => {
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

exports.getOne = function(req,res){
    models.classes.findById(req.params.id,{include: [{model:models.teachers, required:true}]}).then((clas) =>{
        if(clas == null){
            res.json({
                message: "There is no class with this ID"
            })
        } else {
            res.json({
                clas
            })
        }
    }).catch((err) => {
        throw err;
    })
}

exports.delete = function (req,res) {
    models.classes.destroy({where : {id: req.params.id}}).then(
        res.json({
            message: `Class successfully deleted!`
        })
    );
}

exports.add = function (req,res) {
    const {name, teacherId} = req.body;
    models.classes.create({name, teacherId }).then(()=>
        res.json({
            message: "Class successfully added!",
        })
    );
}

exports.edit = function (req,res) {
    const { name, teacherId} = req.body;
    models.classes.update(
        {name, teacherId},
        {where: {id: req.params.id}}
    ).then(
        res.json({
            message: "Class successfully updated!"
        }) 
    );
}