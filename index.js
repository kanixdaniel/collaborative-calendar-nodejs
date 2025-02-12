const express = require('express');
require('dotenv').config();

// servidor express
const app = express();

// directorio publico
app.use(express.static('public'));

// Rutas
app.use('/api/v1/auth', require('./controllers/authController'))
// TODO: CRUD eventos

// Escucha del servidor
app.listen(process.env.PORT || 3000, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
