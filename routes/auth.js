const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/authController');



console.log('JWT_SECRET:', process.env.JWT_SECRET);
// POST /api/auth/signup
router.post('/signup', signup);

// POST /api/auth/login
router.post('/login', login);

module.exports = router;

