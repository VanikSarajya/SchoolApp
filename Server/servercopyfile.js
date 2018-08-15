/// admin Route

const express = require('express');
const router = express.Router();
const tokenChecker = require('../middlewares/tokenChecker');

const loginController = require('../controllers/loginController');

router.post('/login', loginController.login);
router.post('/auth', loginController.authenticate);

module.exports = router;

// ------------------------
// class controller ------------
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
//////----------------------------------------
/// course controller -------------------------
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

/////////////////////////////
///////////////////////--- login controller --------------
const models = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

exports.login = function (req,res) {
    const {email,password} = req.body;
    models.admins.findOne({where : {email}})
    .then((results) => {
        if (results == null){
            res.json({
                message: "Wrong Email"
            });
        } else if (Object.keys(results).length>0){
            if(bcrypt.compareSync(password, results.password)){
                const token = jwt.sign({
                    id: results.id
                }, process.env.JWT_SECRET , {expiresIn : 3 * 60 * 60});
                res.json({
                    token
                });
            } else {
                res.json({
                    message: "Wrong Password"
                })
            }
        }
    }).catch((error) => {
        throw error;
    })
}

exports.authenticate = function (req,res) {
    const {token} = req.body;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err){
                res.json({
                error: "Failed to authenticate",
            });
            } else {
                models.admins.findOne({where: {id: decoded.id}}).then(result => {
                    res.json({
                        admin: result,
                    })
                })
            }
        });
    } else{
        res.json({error: "No token provided"});
    }
}

//////////////////////////
/////////////////////////////////student controller -----------
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

///////////////////////
///////////////--------------------------------teacher controller --

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

exports.getFree = function (req,res){
    let teachers = [];
    let classes = [];
    let freeTeachers = [];
    const a = models.classes.findAll().then(results => {
        classes = results;
        return Promise.resolve();
    })
    const b = models.teachers.findAll().then(results => {
        teachers = results;
        return Promise.resolve();
    })

    Promise.all([a,b]).then(()=>{
        for(let i=0; i < teachers.length; ++i){
            let matched = false;
            for(let j=0; j < classes.length; ++j){
                if(teachers[i].dataValues.id == classes[j].dataValues.teacherId){
                    matched = true;
                }
            }
            if(!matched){
                freeTeachers.push(teachers[i]);
            }
        }
        res.json({
            freeTeachers
        })
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

////////////////////////
