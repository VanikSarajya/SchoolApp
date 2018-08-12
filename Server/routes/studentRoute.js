const express = require('express');
const router = express.Router();

const studentController = require('../controllers/studentController')

router.get('/', studentController.get);
router.get('/:id', studentController.getOne);
router.post('/add', studentController.add);
router.delete('/:id', studentController.delete);
router.put('/edit/:id', studentController.edit);

module.exports = router;