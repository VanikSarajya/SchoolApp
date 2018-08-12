const express = require('express');
const router = express.Router();

const courseController = require('../controllers/courseController');

router.get('/', courseController.get);
router.get('/:id', courseController.getOne);
router.post('/add',courseController.add);
router.delete('/:id', courseController.delete);
router.put('/edit/:id', courseController.edit);

module.exports = router;