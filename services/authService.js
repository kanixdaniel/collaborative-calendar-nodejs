const { response, request } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/UserModel');
const { jwtGenerator } = require('../helpers/jwtGenerator');

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
        // Generar token JWT
        const token = await jwtGenerator(newUser.id, newUser.fullName);

        res.status(201).json({
            ok: true,
            uid: newUser.id,
            fullName: newUser.fullName,
            token
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'No se pudo generar el nuevo usuario. Contacte al administrador'
        });
    }
};

const loginUser = async (req = request, res = response) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        const validPassword = !!user ? bcrypt.compareSync(password, user.password) : false;

        if (!user || !validPassword) {
            return res.status(400).json({
                ok: false,
                message: 'Usuario y/o contraseña inválidos'
            });
        }

        // Generar token JWT
        const token = await jwtGenerator(user.id, user.fullName);

        res.status(200).json({
            ok: true,
            uid: user.id,
            fullName: user.fullName,
            token
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Contacte al administrador'
        });
    }

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