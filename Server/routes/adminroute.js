const express = require('express');
const router = express.Router();
const loginController = require('../controllers/logincontroller')
const teacherController = require('../controllers/teachercontroller')

router.post('/', loginController.login);
router.post('/auth', loginController.authenticate);
router.get('/teachers', teacherController.get);
/*
router.post('/teacher',)
router.put('/teacher', )
router.delete('/teacher', )
*/
module.exports = router;