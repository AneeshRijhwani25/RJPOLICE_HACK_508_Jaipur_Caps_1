const express = require('express');
const authController = require('../controllers/authController');
const authenticate = require('../middleware/authenticate');

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);

router.get('/user/:userId', authController.getUser)

module.exports = router;
