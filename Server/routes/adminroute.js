const express = require('express');
const router = express.Router();
const loginController = require('../controllers/logincontroller');
const teacherController = require('../controllers/teachercontroller');
const classController = require('../controllers/classcontroller');
const studentController = require('../controllers/studentcontroller');

router.post('/', loginController.login);
router.post('/auth', loginController.authenticate);
router.get('/teachers', teacherController.get);
router.post('/teachers', teacherController.add);
router.put('/teachers', teacherController.edit);
router.delete('/teachers', teacherController.delete);
router.get('/classes', classController.get);
router.delete('/classes', classController.delete);
router.post('/classes', classController.add);
router.put('/classes', classController.edit);
router.get('/students', studentController.get);

module.exports = router;