const express = require('express');
const router = express.Router();
const {check} = require('express-validator/check');

const teacherController = require('../controllers/teacherController');

const validation = [
    check('firstName')
        .isLength({min: 1}).withMessage('First name required')
        .isLength({min: 3, max: 60}).withMessage('First name must contain from 3 to 60 characters')
        .matches(/^[a-zA-Z]+$/).withMessage('Only letters allowed'),
    check('lastName')
        .isLength({min: 1}).withMessage('Last name required')
        .isLength({min: 3, max: 60}).withMessage('Last name must contain from 3 to 60 characters')
        .matches(/^[a-zA-Z]+$/).withMessage('Only letters allowed')        
]

router.get('/', teacherController.get);
router.get('/:id',teacherController.getOne)
router.get('/free/only', teacherController.getFree);
router.post('/add', teacherController.add);
router.put('/edit/:id', teacherController.edit);
router.delete('/:id', teacherController.delete);

module.exports = router;

