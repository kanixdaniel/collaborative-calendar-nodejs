const jwt = require('jsonwebtoken');

const jwtGenerator = (uid, fullName) => {
    return new Promise((resolve, reject) => {
        const payload = { uid, fullName };
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '2h' },
            (err, token) => {
                if(err) {
                    console.error(err);
                    reject('No fue posible generar el token');
                }

                resolve(token);
            }
        )
    })
}

module.exports = {
    jwtGenerator
}