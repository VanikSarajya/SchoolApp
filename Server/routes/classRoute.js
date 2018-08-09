const express = require('express');
const router = express.Router();

const classController = require('../controllers/classController');

router.get('/', classController.get);
router.delete('/', classController.delete);
router.post('/', classController.add);
router.put('/', classController.edit);

module.exports = router;
