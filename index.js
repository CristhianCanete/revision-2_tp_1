const express = require('express');
const res = require('express/lib/response');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/')));
// Retorna la pagina de inicio
app.get('index.html', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/', 'index.html'));
  next();
});

app.listen(3000, () => {
    console.log('El servidor se ha iniciado correctamente en el puerto 3000');
});