// API base /api/v1/auth

const { Router } = require('express');
const { newUser, loginUser, renewToken } = require('../services/authService');
const { check } = require('express-validator');
const { regExp } = require('../helpers/constants');
const { fieldValidators } = require('../middlewares/fieldValidators');
const { jwtValidator } = require('../middlewares/jwtValidator');
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
        fieldValidators
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
        fieldValidators
    ],
    loginUser
);

router.get(
    '/renew-token',
    [jwtValidator],// middlewares
    renewToken
);

module.exports = router;