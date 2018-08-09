const express = require('express');
const router = express.Router();

const teacherController = require('../controllers/teacherController');

router.get('/', teacherController.get);
router.post('/', teacherController.add);
router.put('/', teacherController.edit);
router.delete('/', teacherController.delete);

module.exports = router;