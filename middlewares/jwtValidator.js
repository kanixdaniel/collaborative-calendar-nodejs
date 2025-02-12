const { response, request } = require('express');
const jwt = require('jsonwebtoken');

const jwtValidator = (req = request, res = response, next) => {
    // x-token header
    const token = req.header('x-token');

    if(!token) {
        return res.status(401).json({
            ok: false,
            message: 'Usuario no autenticado'
        });
    }

    // Validar token
    try {
        const {uid, fullName} = jwt.verify(token, process.env.JWT_SECRET);

        req.uid = uid;
        req.fullName = fullName;
    } catch (error) {
        return res.status(401).json({
            ok: false,
            message: 'Token inválido'
        });
    }

    next();
}

module.exports = {
    jwtValidator
}