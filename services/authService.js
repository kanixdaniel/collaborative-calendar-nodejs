const { response, request } = require('express');

const newUser = (req = request, res = response) => {
    const { fullName, email, password } = req.body;

    res.status(201).json({
        ok: true,
        msg: 'register',
        fullName,
        email,
        password
    });
};

const loginUser = (req = request, res = response) => {
    const { email, password } = req.body;

    res.status(200).json({
        ok: true,
        msg: 'login',
        email,
        password
    });
};

const renewToken = (req = request, res = response) => {
    const { token } = req.body;

    res.status(200).json({
        ok: true,
        msg: 'login',
        token
    });
};

module.exports = {
    newUser,
    loginUser,
    renewToken,
}