const { response, request } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/UserModel');

const newUser = async (req = request, res = response) => {
    const { email, password } = req.body;
    try {
        let newUser = await User.findOne({ email });
        if (!!newUser) {
            return res.status(400).json({
                ok: false,
                message: 'El correo ingresado ya esta registrado'
            });
        }

        newUser = new User(req.body);

        // encriptar contraseña
        const salt = bcrypt.genSaltSync();
        newUser.password = bcrypt.hashSync(password, salt);
        // Guardar usuario
        await newUser.save();

        res.status(201).json({
            ok: true,
            uid: newUser.id,
            fullName: newUser.fullName
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Error al guardar en base de datos'
        });
    }
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