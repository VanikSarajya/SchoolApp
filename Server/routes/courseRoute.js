const express = require('express');
const router = express.Router();

const courseController = require('../controllers/courseController');

router.get('/', courseController.get);
router.post('/add',courseController.add);
router.delete('/:id', courseController.delete);

module.exports = router;