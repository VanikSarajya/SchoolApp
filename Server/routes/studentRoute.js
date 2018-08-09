const express = require('express');
const router = express.Router();

const studentController = require('../controllers/studentController')

router.get('/', studentController.get);
router.post('/', studentController.add);
router.delete('/', studentController.delete);
router.put('/', studentController.edit);

module.exports = router;