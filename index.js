const express = require('express');

// servidor express
const app = express();

// Rutas
app.get('/', (req, res) => {
    res.json({
        ok: true
    })
});

// Escucha del servidor
app.listen(3000, () => {
    console.log(`Servidor corriendo en puerto ${3000}`);
});
