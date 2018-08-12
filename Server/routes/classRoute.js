const express = require('express');
const router = express.Router();

const classController = require('../controllers/classController');

router.get('/', classController.get);
router.get('/:id', classController.getOne);
router.delete('/:id', classController.delete);
router.post('/add', classController.add);
router.put('/edit/:id', classController.edit);

module.exports = router;
