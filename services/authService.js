const { response, request } = require('express');

const newUser = (req = request, res = response) => {
    res.json({
        ok: true,
        msg: 'register'
    })
};

const loginUser = (req = request, res = response) => {
    res.json({
        ok: true,
        msg: 'login'
    })
};

const renewToken = (req = request, res = response) => {
    res.json({
        ok: true,
        msg: 'new token'
    })
};

module.exports = {
    newUser,
    loginUser,
    renewToken,
}