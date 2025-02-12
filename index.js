const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');
require('dotenv').config();

// servidor express
const app = express();

// Conexión a base de datos
dbConnection();

// CORS
app.use(cors());

// directorio publico
app.use(express.static('public'));

// Lectura e interpretación del cuerpo de la petición
app.use(express.json());

// Rutas
app.use('/api/v1/auth', require('./controllers/authController'));
app.use('/api/v1/events', require('./controllers/eventController'));

// Escucha del servidor
app.listen(process.env.PORT || 3000, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
