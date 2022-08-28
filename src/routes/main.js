const express = require('express');
const router = express.Router();
const controller = require('../controllers/mainController.js');
const adminMiddleware = require('../middlewares/userMiddleware');


router.get('/', controller.index);
router.get('/admin', adminMiddleware, controller.admin);


module.exports = router;