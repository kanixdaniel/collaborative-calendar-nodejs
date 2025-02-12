// API base /api/v1/auth

const { Router } = require('express');
const { newUser, loginUser, renewToken } = require('../services/authService');
const { check } = require('express-validator');
const { regExp } = require('../helpers/constants');
const router = Router();

router.post(
    '/register',
    [ // middlewares
        check('fullName', 'El nombre es necesario').notEmpty(),
        check('fullName', 'El nombre es necesario').matches(regExp.fullName),
        check('email', 'El email es necesario').notEmpty(),
        check('email', 'Debe de proporcionar un email válido').isEmail(),
        check('password', 'La contraseña es necesaria').notEmpty(),
        check('password', 'Debe de proporcionar una contraseña válida').matches(regExp.password),
    ],
    newUser // servicio
);

router.post(
    '/login',
    [ // middlewares
        check('email', 'Email y/o contraseña inválidos').notEmpty(),
        check('email', 'Email y/o contraseña inválidos').isEmail(),
        check('password', 'Email y/o contraseña inválidos').notEmpty(),
        check('password', 'Email y/o contraseña inválidos').matches(regExp.password),
    ],
    loginUser
);

router.patch(
    '/renew-token',
    [ // middlewares
        check('token', 'Debe de proporcionar un token').notEmpty(),
        check('token', 'Debe de proporcionar un token válido').isJWT(),
    ],
    renewToken
);

module.exports = router;