// API base /api/v1/auth

const { Router } = require('express');
const { newUser, loginUser, renewToken } = require('../services/authService');
const router = Router();

router.post('/register', newUser);

router.post('/login', loginUser);

router.patch('/renew-token', renewToken);

module.exports = router;