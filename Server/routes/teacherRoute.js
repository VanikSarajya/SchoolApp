const express = require('express');
const router = express.Router();

const teacherController = require('../controllers/teacherController');


router.get('/', teacherController.get);
router.get('/:id',teacherController.getOne)
router.get('/free/only', teacherController.getFree);
router.post('/add', teacherController.add);
router.put('/edit/:id', teacherController.edit);
router.delete('/:id', teacherController.delete);

module.exports = router;

